import { togglePassword } from './extras/togglePassword.js'
import { registration } from './register/registration.js'
import { switchAnim } from './extras/switchAnimation.js'
import { login } from './login/login.js'

const homeManager = () => { 
  login()
  registration()
  switchAnim()
  togglePassword()
} 

export { homeManager }
