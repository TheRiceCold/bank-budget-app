import MenuHTML from '../../html/MenuHTML.js'
import { inner } from './inner.js'

const chartMenu = new MenuHTML(
  { 
    id: 'chartMenu',
    title: 'Chart',
    inner: inner
  })

export { chartMenu }
