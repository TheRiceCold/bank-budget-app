import MenuHTML from '../../html/MenuHTML.js'
import { inner } from './inner.js'

const transactionMenu = new MenuHTML({ 
  id: 'transactionMenu', 
  title: 'Transaction',
  inner: inner
})

export { transactionMenu }
