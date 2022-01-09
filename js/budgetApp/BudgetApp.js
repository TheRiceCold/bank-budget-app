import { updateAccountInStorage } from '../storage/accountStorage.js'
import { getLoggedAccount } from '../storage/accountStorage.js'
import { setLoggedAccount } from '../storage/accountStorage.js'
import { logoutAccount } from '../storage/accountStorage.js'
import { removeAllChild } from '../utils/helpers.js'
import MyHTML from '../utils/MyHTML.js'
import { content } from './content.js'
import * as DOM from '../utils/dom.js'

class BudgetApp extends MyHTML {
  constructor() {
    super({ tag: 'main', id: 'budgetApp', inner: content })
    this.account = {...getLoggedAccount()}
    this.appId = '#budgetApp '
  }

  render() {
    removeAllChild(DOM.root)
    DOM.root.append(this.html)
    this.manager()
  }

  manager() {
    this.showBalanceExpense()
    this.showBudget()
    this.showExpenses()

    this.submitBudget()
    this.submitExpense()

    this.logout() 
  }

  showBalanceExpense() {
    let expensesList, expensesTotal
    if (this.account.expenses.length !== 0) {
      expensesList = this.account.expenses.map(e => e.amount)
      expensesTotal = expensesList.reduce((prevVal, nextVal) => prevVal + nextVal)
    } else {
      expensesTotal = 0
    }

    const balance = this.account.balance
    const balanceTxt = DOM.get(this.appId+'#totalBalance')
    const expensesTxt = DOM.get(this.appId+'#totalExpenses')
    expensesTxt.innerText = expensesTotal
    balanceTxt.innerText = balance - expensesTotal
  }

  submitBudget() { 
    const budgetForm = DOM.get('#budgetForm')
    budgetForm.onsubmit = e => {
      e.preventDefault()
      let amountInput = e.target.amount
      this.account.budget = Number(amountInput.value)
      setLoggedAccount(this.account)
      updateAccountInStorage(this.account)
      this.showBudget()
      amountInput.value = ''
    }
  }

  showBudget() {
    const budget = this.account.budget 
    const budgetTxt = DOM.get(this.appId+'#totalBudget')
    budgetTxt.innerText = budget
  }

  submitExpense() { 
    const expenseForm = DOM.get(this.appId+'#expenseForm')
    const expenses = this.account.expenses
    expenseForm.onsubmit = e => {
      e.preventDefault()
      const amountInput = e.target.amount
      const amount = Number(amountInput.value)
      const descriptionInput = e.target.description
      const description = descriptionInput.value

      const expense = {
        amount: amount,
        description: description
      }

      expenses.push(expense)
      setLoggedAccount(this.account)
      updateAccountInStorage(this.account)
      amountInput.value = ''
      descriptionInput.value = ''
      this.showExpenses()
      this.showBalanceExpense()
    }
  }

  showExpenses() {
    const expenses = this.account.expenses
    const tbody = DOM.get(this.appId+'table tbody')
    const expensesList = expenses.map(e => `
      <tr><td>${e.description}</td><td>${e.amount}</td>
      <td id="edit"><i class="fas fa-pen"></i></td>
      <td id="delete"><i class="fas fa-trash-alt"></i></td>`)
    
    tbody.innerHTML = expensesList.join('')

    const deleteIcons = DOM.getAll(this.appId+'table #delete')
    deleteIcons.forEach((icon, index) => 
      icon.onclick = () => this.deleteExpense(index))

    const editIcons = DOM.getAll(this.appId+'table #edit')
    editIcons.forEach((icon, index) => 
      icon.onclick = e => this.editExpense(e, index))
  }

  deleteExpense(index) {
    const modal = DOM.get('#deleteModal')
    DOM.addClass(modal, 'show')

    const btnCancel = DOM.get(this.appId+'#deleteModal #cancel')
    btnCancel.onclick = () => DOM.delClass(modal, 'show')

    const btnOk = DOM.get(this.appId+'#deleteModal #ok')
    btnOk.onclick = () => this.deleteExpenseCallback(index, modal)
  }

  deleteExpenseCallback(index, modal) {
    const expenses = this.account.expenses
    expenses.splice(index, 1)

    setLoggedAccount(this.account)
    updateAccountInStorage(this.account)

    this.showExpenses()
    this.showBalanceExpense()

    DOM.delClass(modal, 'show')
  }

  editExpense(e, index) {
    const row = e.target.parentElement.parentElement
    const description = row.children[0].innerText
    const amount = row.children[1].innerText

    const modal = DOM.get('#editModal')
    DOM.addClass(modal, 'show')

    const descriptionInput = DOM.get('#editModal #description')
    descriptionInput.value = description
    const amountInput = DOM.get('#editModal #amount')
    amountInput.value = amount

    const btnCancel = DOM.get(this.appId+'#editModal #cancel')
    btnCancel.onclick = () => DOM.delClass(modal, 'show')

    const btnOk = DOM.get(this.appId+'#editModal #ok')
    btnOk.onclick = () => this.editExpenseCallback(index, modal)
  }

  editExpenseCallback(index, modal) {
    const expenses = this.account.expenses
    const descriptionInput = DOM.get('#editModal #description')
    const amountInput = DOM.get('#editModal #amount')
    expenses[index].description = descriptionInput.value
    expenses[index].amount = Number(amountInput.value)
    setLoggedAccount(this.account)
    updateAccountInStorage(this.account)

    this.showExpenses()
    this.showBalanceExpense()

    DOM.delClass(modal, 'show')
  }
  
  logout() {
    const appId = '#budgetApp '
    const logoutBtn = DOM.get(appId+'#logoutBtn')
    logoutBtn.onclick = () => logoutAccount() 
  }
}

export default BudgetApp
