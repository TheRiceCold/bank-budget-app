import MyHTML from '../../utils/MyHTML.js'

const getHeader = title => `
  <header>
    <h1>${title}</h1>
    <span class="date">
      <input type="date"/>
    </span>
  </header>`

class MenuHTML extends MyHTML {
  constructor(options) {
    options.inner = Array.isArray(options.inner) 
        ? options.inner.join('') 
        : options.inner

    const content = { 
      tag: 'main',
      id: options.id,
      inner: [getHeader(options.title), options.inner]
    }
    super(content)
  }
}

export default MenuHTML
