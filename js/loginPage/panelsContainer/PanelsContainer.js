import MyHTML from '../../utils/MyHTML.js'
import Panel from './Panel.js'
import { leftPanelList, rightPanelList } from './panelList.js'


const LeftPanel = new Panel({...leftPanelList}).asString()
const RightPanel = new Panel({...rightPanelList}).asString()

const PanelsContainer = new MyHTML({
  className: 'panels-container',
  inner: [ LeftPanel, RightPanel ] 
})

export default PanelsContainer
