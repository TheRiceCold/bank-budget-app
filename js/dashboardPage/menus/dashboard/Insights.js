import MyHTML from '../../../utils/MyHTML.js'
import { insightList } from './insightList.js'
import CardInner from './CardInner.js'

const cards = insightList.map(card => CardInner(card).asString()).join('')

const Insights = new MyHTML({
  className: 'insights',
  inner: cards
}).asString()

export default Insights
