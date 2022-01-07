export const content = `
    <div class="budget">
      <h2 class="marketing">Budget App</h2>
        <div>
          <form class="budget__budget-input">
            <h2>Create Your Budget</h2>
            <input type="number" placeholder="Budget Amount">
            <button>Calculate</button>
          </form>

          <form class="budget__expense-input">
            <h2>Expense</h2>
            <input type="text" required placeholder="Expense Name">
            <input type="number" required placeholder="Expense Amount">
            <button>Expense</button>
          </form>
        </div>

        <div class="budget__details">
          <div class="budget__item" id="budgetAmount">
            <h2 class="budget__item-amount"></h2>
            <span class="budget__item-label">Budget</span>
          </div>
          <div class="budget__item">
            <h2 class="budget__item-amount" id="totalExpenses"></h2>
            <span class="budget__item-label">Expenses</span>
          </div>
          <div class="budget__item">
            <h2 class="budget__item-amount" id="balance"></h2>
            <span class="budget__item-label">Balance</span>
          </div>

          <div class="budget__transactions">
            <h1>Transactions</h1>
            <table>
              <thead>
                <th>Name</th>
                <th>Amount</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td> <a href="#"><i class="fas fa-pen"></i></a></td>
                  <td> <a href="#"><i class="fas fa-trash-alt"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="delete__modal">
        <p>Are you sure you want to delete this transaction?</p>
        <div class="delete__modal-buttons">
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>
      <button id="logoutBtn">logout</button>`
