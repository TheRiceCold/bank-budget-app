import { mainMenu } from './menus/main/mainMenu.js'
import { sidebar } from './sidebar/sidebar.js'
import MyHTML from '../utils/MyHTML.js'

const content = { 
  className: 'container', 
  inner: [sidebar, mainMenu.string]
}

const dashboard = new MyHTML(content).html
export { dashboard }
