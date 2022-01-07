import PanelHTML from './html/PanelHTML.js'

const adminContent = {
  position: 'right',
  title: 'One of us?',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid! `,
  buttonId: 'userSwitch',
  buttonText: 'User',
  image: 'register.svg'
}

const userContent = {
  position: 'left',
  title: 'Banking & Budgeting made Simple',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid!`,
  buttonId: 'adminSwitch',
  buttonText: 'Admin',
  image: 'log.svg'
}

const adminPanel = new PanelHTML(adminContent).string
const userPanel = new PanelHTML(userContent).string

export {
  adminPanel,
  userPanel
}
