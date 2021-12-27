import MyHTML from '../../utils/MyHTML.js'
import { sidebarLabels } from './sidebarLabels.js'

const sidebarButtonInner = ({ text, icon }) => `
  <span class="material-icons-sharp">${icon}</span>
  <h3>${text}</h3>`

const sidebarButtons = sidebarLabels
  .map(label => new MyHTML({
      tag: 'a',
      inner: sidebarButtonInner(label)
    }).string
  ).join('')

const content = { className: 'sidebar', inner: sidebarButtons }

const sidebarMenu = new MyHTML(content).string
export { sidebarMenu }
