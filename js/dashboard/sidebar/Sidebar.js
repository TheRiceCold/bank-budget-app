import MyHTML from '../../utils/MyHTML.js'
import SideMenus from './SideMenus.js'

const logo = new MyHTML({
  className: 'logo',
  inner: [
    '<img src="./img/logo.png"/>',
    '<h2>Walter</h2>'
  ]
}).asString()

const closeBtn = new MyHTML({
  className: 'close',
  id: 'closeBtn',
  inner: '<span class="material-icons-sharp">close</span>'
}).asString()

const SidebarTop = new MyHTML({
  className: 'top',
  inner: [ logo, closeBtn ]
}).asString()

const Sidebar = new MyHTML({
  tag: 'aside',
  inner: [ SidebarTop, SideMenus ]
}).asString()

export default Sidebar
