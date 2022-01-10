import MyHTML from '../utils/MyHTML.js'

const deleteModal = new MyHTML({
  className: 'modal',
  id: 'deleteModal',
  inner: ` 
    <h2>Are you sure you want to delete from list?</h2>
    <div id="buttons">
      <button id="ok">OK</button>
      <button id="cancel">Cancel</button>
    </div>`
}).string

const editModal = new MyHTML({
  className: 'modal',
  id: 'editModal',
  inner: ` 
    <h2>Edit</h2>
    <input type="text" id="description" required placeholder="Description">
    <input type="number" id="amount" required placeholder="Amount">
    <button id="ok">Enter</button>
    <button id="cancel">Cancel</button>`
}).string

const budgetTransaction = new MyHTML({
  id: 'budgetExpenses',
  inner: `
    <h2>Expenses</h2>
    <table>
      <thead>
        <th>Name</th>
        <th>Amount</th>
        <th>Edit</th>
        <th>Delete</th>
      </thead>
      <tbody></tbody>
    </table>`
}).string

const inputs = new MyHTML({
  inner:  `
   <form id="budgetForm">
      <h2>Enter your Budget</h2>
      <input type="number" id="amount" placeholder="Budget Amount">
      <button>Enter</button>
    </form>

    <form id="expenseForm">
      <h2>Expense</h2>
      <input type="text" id="description" required placeholder="Description">
      <input type="number" id="amount" required placeholder="Amount">
      <button>Expense</button>
    </form>`
}).string

const container = new MyHTML({
  className: 'container',
  inner: `
  <h2 id="title">Budget App</h2>
  ${inputs}
  <div class="budget__details">
    <div class="budget__item">
      <span class="budget__item-label">Budget</span>
      <h2 class="budget__item-amount" id="totalBudget"></h2>
    </div>
    <div class="budget__item">
      <span class="budget__item-label">Expenses</span>
      <h2 class="budget__item-amount" id="totalExpenses"></h2>
    </div>
    <div class="budget__item">
      <span class="budget__item-label">Balance</span>
      <h2 class="budget__item-amount" id="totalBalance"></h2>
    </div>
    ${budgetTransaction}
  </div>`
}).string

export const content = `
${container}
${deleteModal}${editModal}
<button id="logoutBtn">logout</button>`
