import MyHTML from '../utils/MyHTML.js'
import { forms } from './forms/forms.js'
import { panels } from './panels/panels.js'

const content = {
  id: 'loginPage',
  inner: [ forms, panels ]
}

const loginPage = new MyHTML(content).html
export { loginPage as home }
