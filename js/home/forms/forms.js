import { signInForm } from './signInForm.js'
import { signUpForm } from './signUpForm.js'
import MyHTML from '../../utils/MyHTML.js'

const content = {
  className: 'signin-signup',
  inner: [signInForm.string, signUpForm.string]
}

const signInSignUp = new MyHTML(content).string

const forms = new MyHTML({ className: 'forms-container', inner: signInSignUp }).string
export { forms }
