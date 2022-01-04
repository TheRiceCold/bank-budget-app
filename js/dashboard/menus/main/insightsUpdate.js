import { getLoggedUser } from '../../../utils/storage.js'
import { getStoredUsers } from '../../../utils/storage.js'
import * as DOM from '../../../utils/dom.js'

const getTotalFromHistory = type => {
  const user = getLoggedUser()
  console.log(user)
  const history = user.history
  if (!history) location.reload()

  if (history.length === 0) return 0

  const listByType = history.filter(item => item.type === type)
  const amountList = listByType.map(item => Number(item.amount))

  if (amountList.length === 0) return 0

  const total = amountList.reduce((prevVal, curVal) => prevVal + curVal)
  return total
}

const getInsightsUpdate = () => {
  const user = getLoggedUser()
  const balance = user.balance
  const totalExpenses = getTotalFromHistory('expense')
  const totalWithdrawals = getTotalFromHistory('withdraw')
  
  const content = [
    { total: balance, info: 'info' },
    { total: totalExpenses, info: 'info' },
    { total: totalWithdrawals, info: 'info' },
    { total: 100, info: 'info' }
  ]

  return content 
}

export { getInsightsUpdate }
