import MenuHTML from '../../html/MenuHTML.js'
import { container } from './container.js'

class BudgetMenu extends MenuHTML {
  constructor() {
    const id = 'budgetMenu'
    const title = 'Budget'
    super({ id: id, title: title, inner: container })
  }

  manager() {

  }
}

export default BudgetMenu
