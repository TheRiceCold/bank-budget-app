import MyHTML from '../../utils/MyHTML.js'
import { sidebarMenu }from './sidebarMenu.js'

const logo = new MyHTML({
  className: 'logo',
  inner: '<img src="./img/logo.png"/> <h2>Walter</h2>' 
}).string

const closeBtn = new MyHTML({
  className: 'close',
  id: 'closeBtn',
  inner: '<span class="material-icons-sharp">close</span>'
}).string

const top = new MyHTML({
  className: 'top',
  inner: [logo, closeBtn] 
}).string

const sidebar = new MyHTML({ 
  tag: 'aside', 
  inner: [top, sidebarMenu] 
}).string

export { sidebar }
