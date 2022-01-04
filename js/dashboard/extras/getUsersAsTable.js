import { getStoredUsers } from '../../utils/storage.js'
import { usersToDisplay } from './usersToDisplay.js'
import { jsonToTable } from './jsonToTable.js'
import MyHTML from '../../utils/MyHTML.js'

const getUsersAsTable = (sort = '', size) => {
  let usersForDisplay = usersToDisplay(getStoredUsers())
  const tableSize = usersForDisplay.length
  if (sort === 'desc') usersForDisplay = usersForDisplay.reverse()
  usersForDisplay.length = size || tableSize

  const table = jsonToTable(usersForDisplay).outerHTML
  return table
}

export { getUsersAsTable }
