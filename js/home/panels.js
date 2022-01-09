import PanelHTML from './html/PanelHTML.js'

const adminContent = {
  position: 'right',
  title: 'Banking App',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid! `,
  buttonId: 'userSwitch',
  buttonText: 'Go to Budget App',
  image: 'bank.svg'
}

const userContent = {
  position: 'left',
  title: 'Budget App',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid!`,
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
