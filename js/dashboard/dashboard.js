import MyHTML from '../utils/MyHTML.js'
import { sidebar } from './sidebar/sidebar.js'
import { mainMenu } from './menus/main/mainMenu.js'

const content = { 
  className: 'container', 
  inner: [sidebar, mainMenu.string]
}

const dashboard = new MyHTML(content).html
export { dashboard }
