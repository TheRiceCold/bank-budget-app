import MenuHTML from '../../html/MenuHTML.js'
import { recent } from './recent.js'
import { insights } from './insights.js'

const content = {
  id: 'dashboardMenu',
  title: 'Dashboard',
  inner: [insights, recent]
}

const mainMenu = new MenuHTML(content)
export { mainMenu }
