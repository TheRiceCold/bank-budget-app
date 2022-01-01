import * as DOM from '../../../utils/dom.js'

export function scheduleManager() {
  let nav = 0
  let clicked = null
  let events = localStorage.getItem('events') 
    ? JSON.parse(localStorage.getItem('events')) : []

  const calendar = DOM.get('#calendar')
  const newEventModal = DOM.get('#newEventModal')
  const delEventModal = DOM.get('#delEventModal')
  const eventTitleInput = DOM.get('#eventTitleInput')
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  initButtons(nav)
  load(nav, weekdays, events, clicked)
}

function openModal(date, clicked, events) {
  const backDrop = DOM.get('#modalBackground')
  clicked = date

  const eventForDay = events.find(e => e.date === clicked)

  if (eventForDay) {
    DOM.get('#eventText').innerText = eventForDay.title
    delEventModal.style.display = 'block'
  } 
  else newEventModal.style.display = 'block'
  
  backDrop.style.display = 'block'
}

function load(nav, weekdays, events, clicked) {
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
    const daySquare = document.createElement('div')
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

      daySquare.addEventListener('click', () => openModal(dayString, clicked, events))
    } 
    else daySquare.classList.add('padding')

    calendar.appendChild(daySquare)
  }
}

function closeModal(clicked) {
  const backDrop = DOM.get('#modalBackground')
  eventTitleInput.classList.remove('error')
  newEventModal.style.display = 'none'
  delEventModal.style.display = 'none'
  backDrop.style.display = 'none'
  eventTitleInput.value = ''
  clicked = null
  load()
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error')

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    })

    localStorage.setItem('events', JSON.stringify(events))
    closeModal()
  } else eventTitleInput.classList.add('error')
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked)
  localStorage.setItem('events', JSON.stringify(events))
  closeModal()
}

function initButtons(nav) {
  DOM.get('#nextButton')
    .addEventListener('click', () => {
      nav++
      load()
    })

  DOM.get('#backButton')
    .addEventListener('click', () => {
      nav--
      load()
    })

  DOM.get('#saveButton').addEventListener('click', saveEvent)
  DOM.get('#cancelButton').addEventListener('click', closeModal)
  DOM.get('#deleteButton').addEventListener('click', deleteEvent)
  DOM.get('#closeButton').addEventListener('click', closeModal)
}
