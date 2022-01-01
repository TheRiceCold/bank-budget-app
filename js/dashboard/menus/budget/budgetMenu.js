import MenuHTML from '../../html/MenuHTML.js'
import { container } from './container.js'

const budgetMenu = new MenuHTML({ 
  id: 'budgetMenu', 
  title: 'Budget',
  inner: container
})

export { budgetMenu }
