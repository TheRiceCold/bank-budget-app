import MyHTML from '../../utils/MyHTML.js'
import { sidebarLabels } from './sidebarLabels.js'

const sidebarButtonInner = ({ text, icon }) => `
  <span class="material-icons-sharp">${icon}</span>
  <h3>${text}</h3>`

const sidebarButtons = sidebarLabels
  .map(label => new MyHTML({
      tag: 'a',
      inner: sidebarButtonInner(label)
    }).asString()
  ).join('')

const SideMenus = new MyHTML({ className: 'sidebar', inner: sidebarButtons }).asString()

export default SideMenus
