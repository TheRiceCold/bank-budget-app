import { inner } from './inner.js'
import MenuHTML from '../../html/MenuHTML.js'

const scheduleMenu = new MenuHTML({ 
  id: 'scheduleMenu', 
  title: 'Schedule',
  inner: inner
})

export { scheduleMenu }
