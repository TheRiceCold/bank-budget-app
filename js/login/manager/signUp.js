import * as dom from '../../utils/dom.js'
import { signUpValidate } from './validate/signUpValidate.js'

const callback = e => {
  e.preventDefault()
  signUpValidate(e.target)
}

export const signUp = () =>
  dom.get('#signUpForm')
    .addEventListener('submit', callback)
