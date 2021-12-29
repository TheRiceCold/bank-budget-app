import { storedAccounts } from '../../../utils/storage.js'
import { loggedAccount } from '../../../utils/storage.js'

const accounts = storedAccounts.length
const newAccounts = storedAccounts[accounts-1].fullname
const balance = loggedAccount.balance

const insightList = [
  {
    title: 'balance',
    total: balance,
    description: `Last balance: ${0}`,
    icon: 'money-bill'
  },
  {
    title: 'total expenses',
    total: '524',
    description: `Last expense: ${0}`,
    icon: 'hand-holding-usd'
  },
  {
    title: 'total withdrawal',
    total: '10,864',
    description: `Last withdraw: ${0}`,
    icon: 'receipt'
  },
  {
    title: 'last transfer',
    total: accounts,
    description: `Transfered to: ${newAccounts}`,
    icon: 'users'
  }
]

export { insightList }
