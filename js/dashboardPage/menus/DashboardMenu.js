import MenuHTML from './MenuHTML.js'
import Recent from './dashboard/Recent.js'
import Insights from './dashboard/Insights.js'

const DashboardMenu = new MenuHTML({
  id: 'dashboardMenu',
  title: 'Dashboard',
  inner: [ Insights, Recent ]
})

export default DashboardMenu
