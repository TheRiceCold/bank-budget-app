import MyHTML from '../../../utils/MyHTML.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import { recentList } from '../../manager/recentList.js'

const content = {
  className: 'recent-orders',
  inner: [
    '<h2>Recent Accounts</h2>',
    jsonTable(recentList).outerHTML,
    '<a href="#">See All</a>'
  ]
}

const recent = new MyHTML(content).string
export { recent }
