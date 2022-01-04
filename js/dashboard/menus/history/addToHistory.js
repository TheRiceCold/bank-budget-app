import { getStoredUsers } from '../../../utils/storage.js'
import { setLoggedUser } from '../../../utils/storage.js'
import { getLoggedUser } from '../../../utils/storage.js'
import * as DOM from '../../../utils/dom.js'

const addToHistory = (type, amount, email) => {
  const user = {...getLoggedUser()}
  const history = user.history

  const date = new Date()
  const today = date.toLocaleDateString()

  const timeFormat = { hour: '2-digit', minute: '2-digit' }
  let time = date.toLocaleString([], timeFormat)
  time = time.replace(/\s/, '')

  const toPush = type === 'transfer' 
    ? {
      type: type,
      amount: amount,
      date: `(${time}) ${today}`,
      email: email
    } : { 
      type: type, 
      amount: amount, 
      time: time, 
      date: today 
    }

  history.push(toPush)
  setLoggedUser(user)
}

export { addToHistory }
