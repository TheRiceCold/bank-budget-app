class MyHTML {
  constructor({
    tag,
    className,
    id,
    text,
    inner,
    attr = Array(2)
  }) {
    this.html = document.createElement(tag || 'div')
    this.html.id = id || ''
    this.html.className = className || ''
    this.html.textContent = text || ''
    this.html.innerHTML = Array.isArray(inner) ? inner.join('') : inner || ''
    this.html.setAttribute(attr[0], attr[1])
  }

  asHTML() {
    return this.html
  }

  asString() {
    return this.html.outerHTML
  }
}

export default MyHTML
