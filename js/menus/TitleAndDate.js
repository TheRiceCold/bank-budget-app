import MyHTML from '../utils/MyHTML.js'

const TitleAndDate = (title) => 
  new MyHTML({
    tag: 'header',
    inner: `
      <h1>${title}</h1>
      <span class="date">
        <input type="date">
      </span>`
  })

export default TitleAndDate
