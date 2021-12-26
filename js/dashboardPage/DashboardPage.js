'use strict'
import {menuList} from './menuList.js'
import MyHTML from '../utils/MyHTML.js'
import Sidebar from './sidebar/Sidebar.js'

let CurrentMenu = menuList[0].asString()

const dashboardContent = { className: 'container', inner: [Sidebar, CurrentMenu] }
const DashboardPage = new MyHTML(dashboardContent).asHTML()

export const changeMenu = (e, index) => {
  document.querySelector('.container main').remove()
  CurrentMenu = menuList[index].asHTML()
  e.target.classList.add('active')
  DashboardPage.append(CurrentMenu)
}

export default DashboardPage
