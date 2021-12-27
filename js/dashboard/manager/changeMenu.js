import Menu from './menuList.js'
import * as dom from '../../utils/dom.js'
import { getTableData, refreshTable, searchTable } from '../../utils/helpers.js'

export const changeMenu = () => {
  dom.getQueryAll('.sidebar a')
    .forEach((item, index) => 
      item.addEventListener('click', e => {
        dom.getQuery('.container main').remove()
        const currentMenu = Menu[index].html
        e.target.classList.add('active')
        dom.getQuery('.container').append(currentMenu)

       if (dom.getQuery('#accountsMenu')) {
          const initialTableData = getTableData('#accountsMenu table')
          const searchInput = document.getElementById('searchInput')
          searchInput.addEventListener('keyup', e => refreshTable(searchTable(initialTableData, e.target.value))
          )
        }
      }))
}
