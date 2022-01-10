import { updateAdminInStorage } from '../../../storage/adminStorage.js'
import { getLoggedAdmin } from '../../../storage/adminStorage.js'
import { setLoggedAdmin } from '../../../storage/adminStorage.js'
import * as DOM from '../../../utils/dom.js'

const addToHistory = (type, amount, email, receiver = '') => {
  const admin = {...getLoggedAdmin()}
  const history = admin.history

  const date = new Date()
  const today = date.toLocaleDateString()

  const timeFormat = { hour: '2-digit', minute: '2-digit' }
  let time = date.toLocaleString([], timeFormat)
  time = time.replace(/\s/, '')

  const toPush = type === 'transfer' ? {
    type: type,
    amount: amount,
    date: `${today} (${time})`,
    email: email,
    receiver: receiver
  } : {
    type: type,
    amount: amount,
    date: `${today} (${time})`,
    email: email
  } 

  history.push(toPush)
  setLoggedAdmin(admin)
  updateAdminInStorage(admin)
}

export { addToHistory }
