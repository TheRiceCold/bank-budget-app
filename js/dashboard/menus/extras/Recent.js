import MyHTML from '../../../utils/MyHTML.js'
import { jsonToTable } from '../../../utils/helpers.js'
import { recentList } from '../../manager/recentList.js'

const content = {
  className: 'recent-orders',
  inner: [
    '<h2>Recent Accounts</h2>',
    jsonToTable(recentList).outerHTML,
    '<a href="#">See All</a>'
  ]
}

const Recent = new MyHTML(content).asString()
export default Recent
