export const inner = `
<div class="main">
  <div class="container">
    <div class="topbar">
      <p class="text">Your current balance</p>
      <p class="amount_holder">
        <span id="currency">$</span>
        <span id="balance">500</span>
      </p>
    </div>
    <div class="form">
      <div class="form-control">
        <label for="amount">Amount</label>
        <input type="number" name="amount" id="amount" />
      </div>
      <div class="form-control">
        <label for="type">Type</label>
        <div class="radio">
          <input type="radio" name="type" id="income" checked />
          <label for="radio">Deposit</label>
        </div>
        <div class="radio">
          <input type="radio" name="type" id="expense" />
          <label for="radio">Withdraw</label>
        </div>
      </div>
      <button class="btn" id="save">Enter</button>
      <button class="btn" id="cancel">Cancel</button>
    </div>
  </div>
</div>`
