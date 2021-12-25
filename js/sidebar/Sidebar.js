import MyHTML from '../utils/MyHTML.js'
import SideMenus from './sideMenus.js'

const logo = new MyHTML({
  className: 'logo',
  inner: [
    '<img src="./img/logo.png"/>',
    '<h2>Walter</h2>'
  ]
})

const closeBtn = new MyHTML({
  className: 'close',
  id: 'closeBtn',
  inner: '<span class="material-icons-sharp">close</span>'
})

const SidebarTop = new MyHTML({
  className: 'top',
  inner: [
    logo.asString(),
    closeBtn.asString()
  ]
})

const Sidebar = new MyHTML({
  tag: 'aside',
  inner: [ 
    SidebarTop.asString(),
    SideMenus.asString()
  ]
})

export default Sidebar
