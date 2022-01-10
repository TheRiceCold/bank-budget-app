import MyHTML from '../../../utils/MyHTML.js'
import { newEventModal } from './modals.js'
import { delEventModal } from './modals.js'

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const days = new MyHTML({
  id: 'weekdays',
  inner: weekdays.map(day => `<h3>${day}</h3>`)
}).string

const buttons = new MyHTML({
  inner: ['back', 'next']
  .map(btn => `<button id="${btn}Button">${btn}</button>`)
  .join(' ')
}).string

const header = new MyHTML({
  id: 'header',
  inner: ['<div id="monthDisplay"></div>', buttons]
}).string

const container = new MyHTML({
  id: 'container',
  inner: [header, days, '<div id="calendar"></div>']
}).string

const content = [container, newEventModal, delEventModal, '<div id="modalBg"></div>']

export { content }
