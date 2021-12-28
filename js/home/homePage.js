import { panels } from './panels/panels.js'
import { forms } from './forms/forms.js'
import MyHTML from '../utils/MyHTML.js'

const content = {
  id: 'loginPage',
  inner: [ forms, panels ]
}

const loginPage = new MyHTML(content).html
export { loginPage as home }
