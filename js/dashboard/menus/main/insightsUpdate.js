import { getStoredUsers } from '../../../storage/control.js'
import { getLoggedUser } from '../../../storage/control.js'
import * as DOM from '../../../utils/dom.js'

const getTotalFromHistory = type => {
  const user = {...getLoggedUser()}
  const history = user.history
  if (!history) location.reload()

  if (history.length === 0) return 0

  const listByType = history.filter(item => item.type === type)
  const amountList = listByType.map(item => Number(item.amount))

  if (amountList.length === 0) return 0

  const total = amountList.reduce((prevVal, curVal) => prevVal + curVal)
  return total
}

const getLastFromHistory = type => {
  const user = {...getLoggedUser()}
  const history = user.history.reverse()
  const lastTransfer = history.find(obj => {
    if (obj.type === type)
      return obj
  })
  return lastTransfer
}

const getInsightsUpdate = () => {
  const user = getLoggedUser()

  const balance = user.balance
  const lastDeposit = getLastFromHistory('deposit')
  const depositAmount = lastDeposit ? lastDeposit.amount : 0
  const depositDate = lastDeposit ? lastDeposit.date : ''
  const depositInfo = lastDeposit ? 
    `Last deposit: ${depositAmount} at ${depositDate}` : 'No deposits yet'

  const totalExpenses = getTotalFromHistory('expense')

  const totalWithdrawals = getTotalFromHistory('withdraw') 
  const lastWithdraw = getLastFromHistory('withdraw')
  const withdrawAmount = lastWithdraw ? lastWithdraw.amount : 0
  const withdrawDate = lastWithdraw ? lastWithdraw.date : ''
  const withdrawInfo = lastWithdraw ?
    `Last withdraw: ${withdrawAmount} at ${withdrawDate}` : 'No withdrawals yet'

  const lastTransfer = getLastFromHistory('transfer')
  const transferAmount = lastTransfer ? lastTransfer.amount : 0
  const transferEmail = lastTransfer ? lastTransfer.email : ''
  const transferInfo = lastTransfer ?
    `Receiver: ${transferEmail}` : 'No transfers yet'
  
  const content = [
    { total: balance, info: depositInfo },
    { total: totalExpenses, info: 'info' },
    { total: totalWithdrawals, info: withdrawInfo },
    { total: transferAmount, info: transferInfo }
  ]

  return content 
}

export { getInsightsUpdate }
