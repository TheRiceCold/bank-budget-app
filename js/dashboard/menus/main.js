import MenuHTML from '../html/MenuHTML.js'
import { recent } from './extras/Recent.js'
import { insights } from './extras/Insights.js'

const content = {
  id: 'dashboardMenu',
  title: 'Dashboard',
  inner: [insights, recent]
}

const MainMenu = new MenuHTML(content)
export default MainMenu
