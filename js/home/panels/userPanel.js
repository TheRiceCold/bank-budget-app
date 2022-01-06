import PanelHTML from '../html/PanelHTML.js'

const content = {
  position: 'left',
  title: 'Banking & Budgeting made Simple',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid!`,
  buttonId: 'adminSwitch',
  buttonText: 'Admin',
  image: 'log.svg'
}

const userPanel = new PanelHTML(content).string
export { userPanel }
