import { signUp } from './signUp.js'
import { signIn } from './signIn.js'
import { switchAnim } from './switchAnim.js'

export const loginManager = () => { 
  signIn()
  signUp()
  switchAnim()
} 
