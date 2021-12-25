import MyHTML from '../utils/MyHTML.js'
import FormsContainer from './formsContainer/FormsContainer.js'
import PanelsContainer from './panelsContainer/PanelsContainer.js'

const LoginPage = new MyHTML({
  className: 'login-main',
  inner: [
    FormsContainer.asString(),
    PanelsContainer.asString()
  ]
})

export default LoginPage
