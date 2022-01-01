import MenuHTML from '../../html/MenuHTML.js'
import { container } from './container.js'

const transactionMenu = new MenuHTML({ 
  id: 'transactionMenu', 
  title: 'Transaction',
  inner: container
})

export { transactionMenu }
