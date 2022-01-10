import { updateAdminInStorage } from '../../../storage/adminStorage.js'
import { getLoggedAdmin } from '../../../storage/adminStorage.js'
import { setLoggedAdmin } from '../../../storage/adminStorage.js'
import MenuHTML from '../../html/MenuHTML.js'
import * as DOM from '../../../utils/dom.js'
import { content } from './content.js'

class RemindersMenu extends MenuHTML {
  constructor() {
    const id = 'remindersMenu'
    const title = 'Reminders'
    super({ id: id, title: title, inner: content })
    this.nav = 0
    this.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    this.clicked = null
  }

  manager() {
    this.admin = {...getLoggedAdmin()}
    this.events = this.admin.reminders

    this.initButtons()
    this.load()
  }

  load() {
    const calendar = DOM.get('#calendar')
    const dt = new Date()

    if (this.nav !== 0) dt.setMonth(new Date().getMonth() + this.nav)

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

    const paddingDays = this.weekdays.indexOf(dateString.split(', ')[0])
    const monthDisplay = DOM.get('#monthDisplay')

    monthDisplay.innerText = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`

    calendar.innerHTML = ''

    for(let i = 1; i <= paddingDays + daysInMonth; i++) {
      const daySquare = DOM.create('div')
      daySquare.classList.add('day')

      const dayString = `${month + 1}/${i - paddingDays}/${year}`

      if (i > paddingDays) {
        daySquare.innerText = i - paddingDays
        const eventForDay = this.events.find(e => e.date === dayString)

        if (i - paddingDays === day && this.nav === 0) daySquare.id = 'currentDay'

        if (eventForDay) {
          const eventDiv = DOM.create('div')
          eventDiv.className = 'event'
          eventDiv.innerText = eventForDay.title
          daySquare.appendChild(eventDiv)
        }
        daySquare.onclick = () => this.openModal(dayString)
      } 
      else daySquare.classList.add('padding')

      calendar.appendChild(daySquare)
    }
  }
  
  initButtons() {
    const nextBtn = DOM.get('#nextButton')
    const backBtn = DOM.get('#backButton')
    nextBtn.onclick = () => {
      this.nav++
      this.load()
    }

    backBtn.onclick = () => {
      this.nav--
      this.load()
    }

    const saveBtn = DOM.get('#saveButton')
    const cancelBtn = DOM.get('#cancelButton')
    const delBtn = DOM.get('#deleteButton')
    const closeBtn = DOM.get('#closeButton')

    saveBtn.onclick = () => this.saveEvent()
    cancelBtn.onclick = () => this.closeModal()
    delBtn.onclick = () => this.deleteEvent()
    closeBtn.onclick = () => this.closeModal()
  }

  openModal(date) {
    const newEventModal = DOM.get('#newEventModal')
    const modalBg = DOM.get('#modalBg')
    const deleteEventModal = DOM.get('#delEventModal')
    this.clicked = date

    const eventForDay = this.events.find(e => e.date === this.clicked)

    if (eventForDay) {
      DOM.get('#eventText').innerText = eventForDay.title
      deleteEventModal.style.display = 'block'
    } else 
      newEventModal.style.display = 'block'
    
    modalBg.style.display = 'block'
  }

  saveEvent() {
    const eventTitleInput = DOM.get('#eventTitleInput')

    if (eventTitleInput.value) {
      eventTitleInput.classList.remove('error')

      this.events.push({
        date: this.clicked,
        title: eventTitleInput.value
      })

      setLoggedAdmin(this.admin)
      updateAdminInStorage(this.admin)
      this.closeModal()
    } else 
      eventTitleInput.classList.add('error')
  }

  closeModal() {
    const eventTitleInput = DOM.get('#eventTitleInput')
    const newEventModal = DOM.get('#newEventModal')
    const deleteEventModal = DOM.get('#delEventModal')
    const backDrop = DOM.get('#modalBg')

    eventTitleInput.classList.remove('error')
    newEventModal.style.display = 'none'
    deleteEventModal.style.display = 'none'
    backDrop.style.display = 'none'
    eventTitleInput.value = ''
    this.load()
  }

  deleteEvent() {
    this.events = this.events.filter(e => e.date !== this.clicked)
    this.admin.reminders = this.events
    setLoggedAdmin(this.admin)
    updateAdminInStorage(this.admin)
    this.closeModal()
  }
}

export default RemindersMenu
