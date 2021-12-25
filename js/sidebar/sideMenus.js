import MyHTML from '../utils/MyHTML.js'
import { sidebarLabels } from './sidebarLabels.js'

const sidebarButtonInner = label => {
  const { text, icon } = label
  return [
    `<span class="material-icons-sharp">${icon}</span>`,
    `<h3>${text}</h3>`
  ]
}

const sidebarButtons = sidebarLabels
  .map( label => new MyHTML({
      tag: 'a',
      inner: sidebarButtonInner(label)
    }).asString()
  ).join('')

const SideMenus = new MyHTML({
  className: 'sidebar',
  inner: sidebarButtons
})

export default SideMenus
