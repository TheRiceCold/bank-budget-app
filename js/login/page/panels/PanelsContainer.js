import PanelHTML from './PanelHTML.js'
import MyHTML from '../../../utils/MyHTML.js'
import PanelList from './PanelList.js'

const { right, left } = PanelList

const RightPanel = new PanelHTML({...right}).asString()
const LeftPanel = new PanelHTML({...left}).asString()

const content = {
  className: 'panels-container',
  inner: [ LeftPanel, RightPanel ]
}

const PanelsContainer = new MyHTML(content).asString()
export default PanelsContainer
