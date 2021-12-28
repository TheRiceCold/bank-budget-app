import { signIn } from './signIn.js'
import { signUpManager } from './validate/signUpManager.js'
import { switchAnim } from './switchAnim.js'
import { togglePassword } from './togglePassword.js'

const loginManager = () => { 
  signIn()
  signUpManager()
  switchAnim()
  togglePassword()
} 

export { loginManager as homeManager }
