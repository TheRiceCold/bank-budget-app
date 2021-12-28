import MyHTML from '../../utils/MyHTML.js'

class PanelHTML extends MyHTML {
  constructor() {
    super({ className: 'panel' })
  }

  set content(data) {
    const {
      position,
      title,
      description,
      buttonId,
      buttonText,
      image
      } = data

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
