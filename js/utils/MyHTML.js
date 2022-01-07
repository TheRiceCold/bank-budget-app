class MyHTML {
  constructor(options) {
    this.className = options.className || ''
    this.content = options.inner || ''
    this.tag = options.tag || 'div'
    this.id = options.id || ''

    this.html = document.createElement(this.tag)
    this.setContents(this.content)
    this.init(this.className, this.id)
  }

  init(className, id) {
    if (id.trim() !== '') 
      this.html.id = id
    if (className.trim() !== '')
      this.html.className = className
  }

  setContents(content) {
    this.html.innerHTML = 
      Array.isArray(content) 
        ? content.join('') 
        : content
  }

  get string() { return this.html.outerHTML }
}
  
export default MyHTML
