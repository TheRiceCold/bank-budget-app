import MyHTML from '../../utils/MyHTML.js'

class PanelHTML extends MyHTML {
  constructor(options) {
    super({ className: 'panel' })
    this.setContent(options)
  }

  setContent(options) {
    const {
      position, title,
      description, buttonId,
      buttonText, image
      } = options

    this.html.classList.add(position.concat('-panel'))
    this.html.innerHTML = `
      <div class="content">
        <h3>${title}</h3>
        <p>${description}</p>
        <button class="btn transparent" id="${buttonId}">${buttonText}</button>
      </div>
      <img src="img/${image}" class="image" alt=""/>`
  }
}

export default PanelHTML
