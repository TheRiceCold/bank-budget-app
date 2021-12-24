import MyHTML from './utils/MyHTML.js'
import Sidebar from './sidebar/Sidebar.js'
import { menuList } from './menuList.js'

const Main = new MyHTML({ 
  className: 'container',
  inner: [
    Sidebar.asString(),
    menuList[0]
  ]
}).asHTML()

export function changeMenu(e, index) {
  document.querySelector('.container main').remove()
  const currentMenu = menuList[index]
  e.target.classList.add('active')
  Main.insertAdjacentHTML('beforeend', currentMenu)
}

export default Main
