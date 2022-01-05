import PanelHTML from '../html/PanelHTML.js'

const content = {
  position: 'left',
  title: 'Banking & Budgeting made Simple',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid!`,
  buttonId: 'signUpSwitch',
  buttonText: 'Register',
  image: 'log.svg'
}

const signInPanel = new PanelHTML(content).string
export { signInPanel }
