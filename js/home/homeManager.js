import { registerManager } from './register/registerManager.js'
import { togglePassword } from './extras/togglePassword.js'
import { switchAnim } from './extras/switchAnimation.js'
import { loginManager } from './login/loginManager.js'

const homeManager = () => { 
  loginManager()
  registerManager()
  switchAnim()
  togglePassword()
} 

export { homeManager }
