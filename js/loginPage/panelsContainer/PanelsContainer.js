import PanelHTML from './PanelHTML.js'
import MyHTML from '../../utils/MyHTML.js'
import { leftPanelList, rightPanelList } from './panelList.js'

const LeftPanel = new PanelHTML({...leftPanelList}).asString()
const RightPanel = new PanelHTML({...rightPanelList}).asString()

const PanelsContainer = new MyHTML({
  className: 'panels-container',
  inner: [ LeftPanel, RightPanel ] 
}).asString()

export default PanelsContainer
