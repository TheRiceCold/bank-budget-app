import { loggedAccount } from '../../../utils/storage.js'
import * as DOM from '../../../utils/dom.js'

const getTotalFromHistory = type => {
  const listByType = loggedAccount.history.filter(i => i.type === type)
  const amountList = listByType.map(i => Number(i.amount)) 
  const total = amountList.reduce((prevValue, curValue) => prevValue + curValue)
  return total || 0
}

const getInsightsUpdate = () => {
  const balance = loggedAccount.balance
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
