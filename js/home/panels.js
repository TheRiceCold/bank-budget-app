import PanelHTML from './html/PanelHTML.js'
import MyHTML from '../utils/MyHTML.js'

const rightPanelContent = {
  position: 'right',
  title: 'One of us?',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid! `,
  buttonId: 'signInSwitch',
  buttonText: 'Login',
  image: 'register.svg'
}

const leftPanelContent = {
  position: 'left',
  title: 'Banking & Budgeting made Simple',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid!`,
  buttonId: 'signUpSwitch',
  buttonText: 'Register',
  image: 'log.svg'
}

const rightPanel = new PanelHTML(rightPanelContent).string
const leftPanel = new PanelHTML(leftPanelContent).string

const content = {
  className: 'panels-container',
  inner: [leftPanel, rightPanel]
}

const panels = new MyHTML(content).string
export { panels }
