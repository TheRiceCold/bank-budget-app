import MenuHTML from '../manager/MenuHTML.js'
import Recent from './extras/Recent.js'
import Insights from './extras/Insights.js'

const content = {
  id: 'dashboardMenu',
  title: 'Dashboard',
  inner: [ Insights, Recent ]
}

const MainMenu = new MenuHTML(content)
export default MainMenu
