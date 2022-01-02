import { forms } from './forms/forms.js'
import MyHTML from '../utils/MyHTML.js'
import { panels } from './panels.js'

const content = {
  id: 'loginPage',
  inner: [ forms, panels ]
}

const home = new MyHTML(content).html
export { home }
