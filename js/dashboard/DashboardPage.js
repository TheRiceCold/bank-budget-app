import MyHTML from '../utils/MyHTML.js'
import Sidebar from './sidebar/Sidebar.js'
import MainMenu from './menus/MainMenu.js'

const content = { 
  className: 'container', 
  inner: [
    Sidebar,
    MainMenu.asString()
  ]
}

const DashboardPage = new MyHTML(content).asHTML()
export default DashboardPage
