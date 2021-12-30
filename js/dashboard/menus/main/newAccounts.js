import { accountsToDisplay } from '../../../utils/accountsToDisplay.js'
import { getStoredAccounts } from '../../../utils/storage.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import MyHTML from '../../../utils/MyHTML.js'

const list = accountsToDisplay(getStoredAccounts()).reverse()
list.length = 5

const content = {
  id: 'newAccounts',
  inner: [
    '<h2>New Registered Accounts</h2>',
    jsonTable(list).outerHTML,
    '<a href="#">See All</a>'
  ]
}

const newAccounts = new MyHTML(content).string
export { newAccounts }
