import MyHTML from '../../../utils/MyHTML.js'

const btnLabels = ['enter', 'cancel']
  .map(btn => `<button class="btn" id="${btn}">${btn}</button>`)

const buttons = new MyHTML({ class: 'buttons', inner: btnLabels }).string

const radios = ['deposit', 'withdraw']
  .map((rdo, i) => new MyHTML({
    className: 'radio',
    inner: `<input type="radio" name="type" id=${rdo} ${i === 0 ? 'checked' : ''} />${rdo}`
  }).string).join(' ')

const form = new MyHTML({
  tag: 'form',
  inner: [
    radios,
    '<input type="number" name="amount" id="amount" placeholder="Amount"/>',
    '<input type="submit" class="btn" id="enter" value="enter">'
  ]
}).string

export { form }
