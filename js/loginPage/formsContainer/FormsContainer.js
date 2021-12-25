import MyHTML from '../../utils/MyHTML.js'
import SignInForm from './signInForm.js'
import SignUpForm from './signUpForm.js'

const SignInSignUp = new MyHTML({
  className: 'signin-signup',
  inner: [ SignInForm.asString(), SignUpForm.asString() ]
}).asString()

const FormsContainer = new MyHTML({
  className: 'forms-container',
  inner: SignInSignUp 
})

export default FormsContainer
