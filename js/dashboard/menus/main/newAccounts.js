import { accountsToDisplay } from '../../../utils/accountsToDisplay.js'
import { getStoredAccounts } from '../../../utils/storage.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import MyHTML from '../../../utils/MyHTML.js'

const list = accountsToDisplay(getStoredAccounts()).reverse()
list.length = 5
const table = jsonTable(list).outerHTML

const content = {
  id: 'newAccounts',
  inner: [
    '<h2>New Registered Accounts</h2>',
    table,
    '<a href="#">See All</a>'
  ]
}

export const newAccounts = new MyHTML(content).string
