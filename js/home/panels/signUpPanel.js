import PanelHTML from '../html/PanelHTML.js'

const content = {
  position: 'right',
  title: 'One of us?',
  description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
    ex ratione. Aliquid! `,
  buttonId: 'signInSwitch',
  buttonText: 'Login',
  image: 'register.svg'
}

const signUpPanel = new PanelHTML(content).string
export { signUpPanel }
