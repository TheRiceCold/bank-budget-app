
const header = 
`<header>
  <h1>Accounts</h1>
  <span class="date">
    <input type="date">
  </span>
</header>`

const Accounts = `
<main id="accounts">
  ${header}
  <div class="insights">
    <div class="sales">
      <span class="material-icons-sharp">analytics</span>
      <div class="middle">
        <div class="left">
          <h3>Total Accounts</h3>
          <h1>524</h1>
        </div>
     </div>
      <small class="text-muted">Last added: Hisoka Morrow</small>
    </div>
    
    <div class="expenses">
      <span class="material-icons-sharp">bar_chart</span>
      <div class="middle">
        <div class="left">
          <h3>Total Savings</h3>
          <h1>$14,160</h1>
        </div>
      </div>
      <small class="text-muted">Last Saved: 1000 PHP</small>
    </div>

    <div class="income">
      <span class="material-icons-sharp">stacked_line_chart</span>
      <div class="middle">
        <div class="left">
          <h3>Total Withdrawal</h3>
          <h1>$10,864</h1>
        </div>
      </div>
      <small class="text-muted">Last 24 Hours</small>
    </div>
    <div class="income">
      <span class="material-icons-sharp">stacked_line_chart</span>
      <div class="middle">
        <div class="left">
          <h3>Total Loan</h3>
          <h1>$10,864</h1>
        </div>
      </div>
      <small class="text-muted">Last 24 Hours</small>
    </div>
  </div>

  <div class="recent-orders">
    <h2>Recent Accounts</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Balance</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Foldable Mini Drone</td>
          <td>85631</td>
          <td>Due</td>
          <td class="warning">Pending</td>
          <td class="primary">Details</td>
        </tr>
        <tr>
          <td>Foldable Mini Drone</td>
          <td>85631</td>
          <td>Due</td>
          <td class="warning">Pending</td>
          <td class="primary">Details</td>
        </tr>
        <tr>
          <td>Foldable Mini Drone</td>
          <td>85631</td>
          <td>Due</td>
          <td class="warning">Pending</td>
          <td class="primary">Details</td>
        </tr>
      </tbody>
    </table>
    <a href="#">See All</a>
  </div>
</main>`

export default Accounts
