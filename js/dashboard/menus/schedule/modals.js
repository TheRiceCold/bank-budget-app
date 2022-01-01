import MyHTML from '../../../utils/MyHTML.js'

const newEventModal = new MyHTML({
  className: 'modal',
  id: 'newEventModal',
  inner: `
    <h2>Add Schedule</h2>
    <input id="eventTitleInput" placeholder="Event Title" />
    <button id="saveButton">Save</button>
    <button id="cancelButton">Cancel</button>`
}).string

const delEventModal = new MyHTML({
  className: 'modal',
  id: 'delEventModal',
  inner: `
    <h2>Event</h2>
    <p id="eventText"></p>
    <button id="deleteButton">Delete</button>
    <button id="closeButton">Close</button>`
}).string

export { newEventModal, delEventModal }
