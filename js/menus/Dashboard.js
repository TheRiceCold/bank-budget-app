import MyHTML from '../utils/MyHTML.js'
import InsightCards from './dashboard/InsightCards.js'
import TitleAndDate from './TitleAndDate.js'
import { Recent } from './dashboard/Recent.js'

const Dashboard = new MyHTML({
  tag: 'main',
  id: 'dashboard',
  inner: [
    TitleAndDate('Dashboard').asString(), 
    InsightCards.asString(),
    Recent
  ]
}).asString()

export default Dashboard
