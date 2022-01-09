import MenuHTML from '../../html/MenuHTML.js'
import * as DOM from '../../../utils/dom.js'
import { newEventModal } from './modals.js'
import { delEventModal } from './modals.js'
import { content } from './content.js'

class RemindersMenu extends MenuHTML {
  constructor() {
    const id = 'remindersMenu'
    const title = 'Reminders'
    super({ id: id, title: title, inner: content })
  }
  manager() { 
    let nav = 0
    let events = localStorage.getItem('events') 
      ? JSON.parse(localStorage.getItem('events')) : []

    this.initButtons(nav)
    this.load(nav, events)
  }

  load(nav, events) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dt = new Date()

    if (nav !== 0)
      dt.setMonth(new Date().getMonth() + nav)

    const day = dt.getDate()
    const month = dt.getMonth()
    const year = dt.getFullYear()

    const firstDayOfMonth = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0])

    DOM.get('#monthDisplay').innerText = 
      `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`

    calendar.innerHTML = ''

    for(let i = 1; i <= paddingDays + daysInMonth; i++) {
      const daySquare = DOM.create('div')
      daySquare.classList.add('day')

      const dayString = `${month + 1}/${i - paddingDays}/${year}`

      if (i > paddingDays) {
        daySquare.innerText = i - paddingDays
        const eventForDay = events.find(e => e.date === dayString)

        if (i - paddingDays === day && nav === 0) 
          daySquare.id = 'currentDay'

        if (eventForDay) {
          const eventDiv = document.createElement('div')
          eventDiv.classList.add('event')
          eventDiv.innerText = eventForDay.title
          daySquare.appendChild(eventDiv)
        }

        daySquare.onclick = () => this.openModal(dayString, events)
      } 
      else daySquare.classList.add('padding')

      calendar.appendChild(daySquare)
    }
  }

  openModal(date, events) {
    const backDrop = DOM.get('#modalBg')
    const newEventModal = DOM.get('#newEventModal')

    const eventForDay = events.find(e => e.date === date)

    if (eventForDay) {
      DOM.get('#eventText').innerText = eventForDay.title
      delEventModal.style.display = 'block'
    } 
    else newEventModal.style.display = 'block'
    
    backDrop.style.display = 'block'
  }

  initButtons(nav) {
    DOM.get('#nextButton').onclick = () => {
        nav++
        this.load()
      }

    DOM.get('#backButton').onclick = () => {
        nav--
        this.load()
      }

    DOM.get('#saveButton').onclick = this.saveEvent
    DOM.get('#cancelButton').onclick = () => this.closeModal()
    DOM.get('#deleteButton').onclick = this.deleteEvent
    DOM.get('#closeButton').onclick = () => this.closeModal()
  }

  closeModal() {
    const backDrop = DOM.get('#modalBg')
    const newEventModal = DOM.get('#newEventModal')
    const delEventModal = DOM.get('#delEventModal')
    eventTitleInput.classList.remove('error')
    newEventModal.style.display = 'none'
    delEventModal.style.display = 'none'
    backDrop.style.display = 'none'
    eventTitleInput.value = ''
  }

  saveEvent() {
    if (eventTitleInput.value) {
      eventTitleInput.classList.remove('error')

      events.push({
        date: date,
        title: eventTitleInput.value,
      })

      localStorage.setItem('events', JSON.stringify(events))
      this.closeModal()
    } else eventTitleInput.classList.add('error')
  }

  deleteEvent() {
    events = events.filter(e => e.date !== date)
    localStorage.setItem('events', JSON.stringify(events))
    this.closeModal()
  }
}

export default RemindersMenu
