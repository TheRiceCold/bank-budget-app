import { adminPanel } from './panels/adminPanel.js'
import { userPanel } from './panels/userPanel.js'
import { adminForm } from './forms/adminForm.js'
import { userForm } from './forms/userForm.js'
import MyHTML from '../utils/MyHTML.js'

const panels = new MyHTML( {
  className: 'panels-container',
  inner: [userPanel, adminPanel]
}).string

const userAdmin = new MyHTML({
  className: 'user-admin',
  inner: [userForm.string, adminForm.string]
}).string

const forms = new MyHTML({ className: 'forms-container', inner: userAdmin }).string

const content = [forms, panels]

export { content }
