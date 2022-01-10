import { getStoredAccounts } from '../../../storage/accountStorage.js'
import { getLoggedAdmin } from '../../../storage/adminStorage.js'
import * as DOM from '../../../utils/dom.js'

const getTotalFromHistory = type => {
  const user = {...getLoggedAdmin()}
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
  const user = {...getLoggedAdmin()}
  const history = user.history.reverse()
  const lastTransfer = history.find(obj => {
    if (obj.type === type)
      return obj
  })
  return lastTransfer
}

const getLastInfo = type => {
  const last = getLastFromHistory(type)
  const amount = last ? Number(last.amount) : 0
  const email = last ? last.email : ''
  const date = last ? last.date: ''
  const info = last ? 
    `Last ${type}: ${date} Email: ${email} Amount: ₱${amount.toLocaleString()}` 
    : 'No deposits yet.'
  return info
}

const getInsightsUpdate = () => {
  const accounts = getStoredAccounts()
  const totalAccounts = accounts.length
  const lastRegistered = accounts[totalAccounts - 1]

  const totalDeposits = getTotalFromHistory('deposit').toLocaleString()
  const depositInfo = getLastInfo('deposit')

  const totalWithdrawals = getTotalFromHistory('withdraw').toLocaleString()
  const withdrawInfo = getLastInfo('withdraw')

  const lastTransfer = getLastFromHistory('transfer')
  const transferAmount = lastTransfer ? lastTransfer.amount : 0
  const transferEmail = lastTransfer ? lastTransfer.email : ''
  const transferReceiver = lastTransfer ? lastTransfer.receiver : ''
  const transferInfo = lastTransfer ?
    `Sender: ${transferEmail} Receiver: ${transferReceiver}` : 'No transfers yet'
  
  const content = [
    { total: totalAccounts, info: `Last registered: ${lastRegistered.fullname} Date: ${lastRegistered.date}` },
    { total: '₱'+totalDeposits, info: depositInfo },
    { total: '₱'+totalWithdrawals, info: withdrawInfo },
    { total: '₱'+transferAmount, info: transferInfo }
  ]

  return content 
}

export { getInsightsUpdate }
