import { togglePassword } from './extras/togglePassword.js'
import { switchAnim } from './extras/switchAnimation.js'
import { register } from './register/register.js'
import { login } from './login/login.js'

const homeManager = () => { 
  login()
  register()
  switchAnim()
  togglePassword()
} 

export { homeManager }
