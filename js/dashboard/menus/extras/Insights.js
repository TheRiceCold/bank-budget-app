import MyHTML from '../../../utils/MyHTML.js'
import CardHTML from '../../manager/CardHTML.js'
import { insightList } from '../../manager/insightList.js'

const cards = insightList
  .map(card =>
    new CardHTML(card).asString()
  ).join('')

const content = { className: 'insights', inner: cards }

const Insights = new MyHTML(content).asString()
export default Insights
