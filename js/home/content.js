import { signInForm } from './forms/signInForm.js'
import { signUpForm } from './forms/signUpForm.js'
import { signInPanel } from './panels/signInPanel.js'
import { signUpPanel } from './panels/signUpPanel.js'
import MyHTML from '../utils/MyHTML.js'

const panels = new MyHTML( {
  className: 'panels-container',
  inner: [signInPanel, signUpPanel]
}).string

const signInSignUp = new MyHTML({
  className: 'signin-signup',
  inner: [signInForm.string, signUpForm.string]
}).string

const forms = new MyHTML({ className: 'forms-container', inner: signInSignUp }).string

const content = [ forms, panels ]

export { content }
