export default class MyHTML {
  constructor({
    type = 'div',
    className = '',
    id = '',
    content = ''
  } = {}) {
    this.html = document.createElement(type)
    this.html.className = className
    this.html.id = id
    this.html.textContent = content
  }

  getHTML() {
    return this.html
  }

  addClass(className) {
    this.html.classList.add(className)
  }

  delClass(className) {
    this.html.classList.remove(className)
  }
}

const html = new MyHTML({ id: 'wow' }).getHTML()
console.log(html)
