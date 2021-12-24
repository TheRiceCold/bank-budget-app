export default class MyHTML {
  constructor({
    tag,
    className,
    id,
    text,
    inner,
  }) {
    this.html = document.createElement(tag || 'div')
    this.html.id = id || ''
    this.html.className = className || ''
    this.html.textContent = text || ''
    this.html.innerHTML = Array.isArray(inner) ? inner.join('') : inner || ''
  }

  asHTML() {
    return this.html
  }

  asString() {
    return this.html.outerHTML
  }
}
