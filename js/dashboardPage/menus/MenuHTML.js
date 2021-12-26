import MyHTML from '../../utils/MyHTML.js'

class MenuHTML extends MyHTML {
  constructor({ id, title, inner }) {
    const header = `
      <header>
        <h1>${title}</h1>
        <span class="date">
          <input type="date">
        </span>
      </header>`

    super({ tag: 'main', id: id, inner: [header, inner] })
  }
}

export default MenuHTML
