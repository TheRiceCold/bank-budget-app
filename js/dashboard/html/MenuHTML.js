import MyHTML from '../../utils/MyHTML.js'

const getHeader = title => `
  <header>
    <h1>${title}</h1>
    <span class="date">
      <input type="date"/>
    </span>
  </header>`

class MenuHTML extends MyHTML {
  constructor({ id, title, inner = [] }) {
    const content = { 
      tag: 'main',
      id: id,
      inner: [getHeader(title), inner.join('')]
    }
    super(content)
  }
}

export default MenuHTML
