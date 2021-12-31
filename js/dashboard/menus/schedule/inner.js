import MyHTML from '../../../utils/MyHTML.js'

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const days = new MyHTML({
  id: 'weekdays',
  inner: weekdays.map(day => `<h3>${day}</h3>`)
}).string

const header = new MyHTML({
  id: 'header',
  inner: `
    <div id="monthDisplay"></div>
    <div>
      <button id="backButton">Back</button>
      <button id="nextButton">Next</button>
    </div>`
}).string

const container = new MyHTML({
  id: 'container',
  inner: [header, days, '<div id="calendar"></div>']
}).string

const newEventModal = new MyHTML({
  id: 'newEventModal',
  inner: `
    <h2>New Event</h2>
    <input id="eventTitleInput" placeholder="Event Title" />
    <button id="saveButton">Save</button>
    <button id="cancelButton">Cancel</button>`
}).string

const delEventModal = new MyHTML({
  id: 'deleteEventModal',
  inner: `
    <h2>Event</h2>
    <p id="eventText"></p>
    <button id="deleteButton">Delete</button>
    <button id="closeButton">Close</button>`
}).string

export const inner = `
  ${container}
  ${newEventModal} 
  ${delEventModal}
  <div id="modalBackDrop"></div>`
