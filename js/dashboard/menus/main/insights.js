import { insightList } from './insightList.js'
import MyHTML from '../../../utils/MyHTML.js'
import CardHTML from '../../html/CardHTML.js'

const cards = insightList
  .map(card =>
    new CardHTML(card).string
  ).join('')

const content = { className: 'insights', inner: cards }

const insights = new MyHTML(content).string
export { insights }
