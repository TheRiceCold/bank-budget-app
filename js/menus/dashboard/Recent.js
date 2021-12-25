import MyHTML from '../../utils/MyHTML.js'

const recentTable = `
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
</table>`


const Recent = new MyHTML({
  className: 'recent-orders',
  inner: [
    '<h2>Recent Accounts</h2>',
    recentTable,
    '<a href="#">See All</a>'
  ]
})

export default Recent
