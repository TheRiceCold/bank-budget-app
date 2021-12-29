import MyHTML from '../../utils/MyHTML.js'
import { sidebarLabels } from './sidebarLabels.js'

const sidebarButtonInner = ({ text, icon }) => `
  <i class=\"fas fa-${icon}\"></i>
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
  inner: ['<img src="./img/logo.png"/>', sidebarMenu] 
}).string

export { sidebar }
