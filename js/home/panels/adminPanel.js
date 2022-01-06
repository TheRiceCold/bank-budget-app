import PanelHTML from '../html/PanelHTML.js'

const content = {
  position: 'right',
  title: 'One of us?',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid! `,
  buttonId: 'userSwitch',
  buttonText: 'User',
  image: 'register.svg'
}

const adminPanel = new PanelHTML(content).string
export { adminPanel }
