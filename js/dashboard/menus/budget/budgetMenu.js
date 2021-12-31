import MenuHTML from '../../html/MenuHTML.js'
import { inner } from './inner.js'

const budgetMenu = new MenuHTML({ 
  id: 'budgetMenu', 
  title: 'Budget',
  inner: inner
})

export { budgetMenu }
