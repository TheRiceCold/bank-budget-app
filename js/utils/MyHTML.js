class MyHTML {
  constructor(options) {
    const className = options.className || ''
    const tag = options.tag || 'div'
    const id = options.id || ''

    this.html = document.createElement(tag)
    this.inner(options.inner)
    this.init(className, id)
  }

  init(className, id) {
    if (id.trim() !== '') 
      this.html.id = id
    if (className.trim() !== '')
      this.html.className = className
  }

  inner(content) {
    this.html.innerHTML = 
      Array.isArray(content) 
        ? content.join('') 
        : content
  }

  get string() { return this.html.outerHTML }
}
  
export default MyHTML
