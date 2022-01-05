import MenuHTML from '../../html/MenuHTML.js'
import { newEventModal } from './modals.js'
import { delEventModal } from './modals.js'
import { container } from './container.js'

const scheduleMenu = new MenuHTML({ 
  id: 'scheduleMenu', 
  title: 'Schedule',
  inner: [ 
    container,
    newEventModal,
    delEventModal,
    '<div id="modalBackground"></div>'
  ]
})

export { scheduleMenu }
