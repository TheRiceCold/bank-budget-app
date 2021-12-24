import Main from './Main.js'
import { getSidebarMenus} from './utils/dom.js'
import { changeMenu } from './Main.js'

document.body.append(Main)

onload = () => {
  getSidebarMenus().forEach((item, index) => 
    item.addEventListener('click', e => changeMenu(e, index)))
}
