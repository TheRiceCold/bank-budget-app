if (!localStorage.accounts)
  localStorage.accounts = JSON.stringify(defaultList)

const storedAccounts = localStorage.accounts
  ? JSON.parse(localStorage.accounts) : []

if (!localStorage.loggedAccount)
  localStorage.loggedAccount = '{}'

const loggedAccount = JSON.parse(localStorage.loggedAccount)
const accounts = storedAccounts.length
const lastRegisteredAccount = storedAccounts[accounts-1].fullname
const balance = loggedAccount.balance

const insightList = [
  {
    title: 'Current Balance',
    total: balance,
    description: `Last saved: ${0}`,
    icon: 'money-bill'
  },
  {
    title: 'Total Savings',
    total: '524',
    description: 'Last saved: 1000PHP',
    icon: 'hand-holding-usd'
  },
  {
    title: 'Total Withdrawal',
    total: '10,864',
    description: 'Last saved: 1000PHP',
    icon: 'receipt'
  },
  {
    title: 'Total Accounts',
    total: accounts,
    description: `Last added: ${lastRegisteredAccount}`,
    icon: 'users'
  }
]

export { insightList }
