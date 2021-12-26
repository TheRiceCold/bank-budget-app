import MyHTML from '../utils/MyHTML.js'
import FormsContainer from './formsContainer/FormsContainer.js'
import PanelsContainer from './panelsContainer/PanelsContainer.js'

const LoginPage = new MyHTML({
  id: 'loginPage',
  inner: [ FormsContainer, PanelsContainer ]
}).asHTML()

export default LoginPage
