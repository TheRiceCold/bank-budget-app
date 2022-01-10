import PanelHTML from './html/PanelHTML.js'

const adminContent = {
  position: 'right',
  title: 'Banking App',
  description: `
    Start transaction today. Don't rob your future. Speed, save and manager your money all in one place.`,
  buttonId: 'userSwitch',
  buttonText: 'Go to Budget App',
  image: 'bank.svg'
}

const userContent = {
  position: 'left',
  title: 'Budget App',
  description: `
    Manage your money in one place and easily keep track of expenses.`,
  buttonId: 'adminSwitch',
  buttonText: 'Go to Bank App',
  image: 'budget.svg'
}

const adminPanel = new PanelHTML(adminContent).string
const userPanel = new PanelHTML(userContent).string

export {
  adminPanel,
  userPanel
}
