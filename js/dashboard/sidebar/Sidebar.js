import { sidebarLabels } from './sidebarLabels.js'
import MyHTML from '../../utils/MyHTML.js'

const sidebarButtonInner = ({ text, icon }) => `
  <i class=\"${icon}\"></i>
  <h3>${text}</h3>`

const sidebarButtons = sidebarLabels
  .map(label => new MyHTML({
      tag: 'a',
      id: label.id,
      inner: sidebarButtonInner(label)
    }).string
  ).join('')

const content = { className: 'sidebar', inner: sidebarButtons }

const sidebarMenu = new MyHTML(content).string

const sidebar = new MyHTML({ 
  tag: 'aside', 
  inner: ['<h2 id="accountName">Welcome Shay</h2>', sidebarMenu] 
}).string

export { sidebar }
