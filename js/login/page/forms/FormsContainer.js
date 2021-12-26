import SignInForm from './signInForm.js'
import SignUpForm from './signUpForm.js'
import MyHTML from '../../../utils/MyHTML.js'

const SignInSignUp = new MyHTML({
  className: 'signin-signup',
  inner: [ SignInForm, SignUpForm ]
}).asString()

const FormsContainer = new MyHTML({
  className: 'forms-container',
  inner: SignInSignUp 
}).asString()

export default FormsContainer
