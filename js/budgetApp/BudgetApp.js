import { removeAllChild } from '../utils/helpers.js'
import MyHTML from '../utils/MyHTML.js'
import { content } from './content.js'
import * as DOM from '../utils/dom.js'

class BudgetApp extends MyHTML {
  constructor() {
    super({ inner: content })
  }
  render() {
    removeAllChild(DOM.root)
    DOM.root.append(this.html)
    this.manager()
  }
  manager() {

  }
}

export default BudgetApp
