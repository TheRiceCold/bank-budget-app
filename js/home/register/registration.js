import { submitAccount } from './submitAccount.js'
import { typingCheck } from './typingCheck.js'
import { getValidValue } from './validate.js'

const registration = () => {
  typingCheck()
  submitAccount()
}

export { registration }
