import { sidebarLabels } from './sidebarLabels.js'
import MyHTML from '../../utils/MyHTML.js'

const sidebarButtons = sidebarLabels
  .map(label => {
    const { id, icon, text } = label

    return new MyHTML({
      tag: 'a', 
      id: label.id,
      inner: `<i class="${icon}"></i>${text}`
    }).string
  }).join('')

const accountName = '<h2 id="accountName"></h2>'
const sidebarMenu = new MyHTML({ 
  className: 'sidebar', 
  inner: sidebarButtons 
}).string

const content = [accountName, sidebarMenu]
export { content } 
