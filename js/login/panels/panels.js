import PanelHTML from '../html/PanelHTML.js'
import MyHTML from '../../utils/MyHTML.js'
import PanelList from './panelsContent.js'

const { right, left } = PanelList

const RightPanel = new PanelHTML({...right}).string
const LeftPanel = new PanelHTML({...left}).string

const content = {
  className: 'panels-container',
  inner: [ LeftPanel, RightPanel ]
}

const panels = new MyHTML(content).string
export { panels }
