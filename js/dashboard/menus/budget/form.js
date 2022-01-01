import MyHTML from '../../../utils/MyHTML.js'

export const btnLabels = ['enter', 'cancel']
  .map(btn => `<button class="btn" id="${btn}">${btn}</button>`)

const buttons = new MyHTML({ class: 'buttons', inner: btnLabels }).string

const inputs = ['amount', 'description']
  .map((input, i) => 
    `<input type="${i === 0 ? 'number' : 'text'}" 
        name="${input}" id="${input}" placeholder="${input}"/>`).join(' ')

const list = `
<p>Expense List</p>
<ul id="list_of_transactions">
  <li class="transaction expense">
    <p>Expense 1</p>
    <div class="right_side">
      <p>$100</p>
      <button>edit</button>
      <button>delete</button>
    </div>
  </li>
</ul>`

const form = new MyHTML({
  tag: 'form',
  inner: [inputs, buttons, list]
}).string

export { form }
