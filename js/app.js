import MyHTML from './utils/HTMLElement.js'
import Dashboard from './menus/Dashboard.js'
import Accounts from './menus/Accounts.js'
import Deposit from './menus/Deposit.js'
import Withdraw from './menus/Withdraw.js'
import Transfer from './menus/Transfer.js'
import Budget from './menus/Budget.js'
import Chart from './menus/Chart.js'
import { sidebar } from './aside/Sidebar.js'

const root = document.body
const menus = [
  Dashboard,
  Accounts,
  Deposit,
  Withdraw,
  Transfer,
  Budget,
  Chart,
  'settings'
]

let currentMenu = menus[0]

root.innerHTML += `
 <div class="container">
    <aside>
      <div class="top">
        <div class="logo">
          <img src="./img/logo.png" />
          <h2>WALTER</h2>
        </div>
        <div class="close" id="closeBtn">
          <span class="material-icons-sharp">close</span>
        </div>
      </div>
      ${sidebar}
    </aside>`

onload = () => {
  const sideMenus = Array.from(document.querySelectorAll('.sidebar a'))
  const container = document.querySelector('.container')

  container.insertAdjacentHTML('beforeend', currentMenu)

  sideMenus.forEach((item, index) => {
    item.addEventListener('click', e => changeMenu(e, index))
  })

  function changeMenu(e, index) {
    document.querySelector('.container main').remove()
    currentMenu = menus[index]
    e.target.classList.add('active')
    container.insertAdjacentHTML('beforeend', currentMenu)
  }

  const getDate = () => new Date().toISOString().slice(0, 10)
  document.querySelector('input[type="date"]').value = getDate()
}
