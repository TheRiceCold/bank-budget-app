import MyHTML from '../utils/MyHTML.js'
import { sidebar }from './sidebar/sidebar.js'
import MainMenu from './menus/main.js'

const content = { 
  className: 'container', 
  inner: [sidebar, MainMenu.string]
}

const dashboard = new MyHTML(content).html
export { dashboard }
