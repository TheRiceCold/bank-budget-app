import PanelHTML from '../html/PanelHTML.js'
import MyHTML from '../../utils/MyHTML.js'
import { panelList }from './panelList.js'

const { right, left } = panelList

const rightPanel = new PanelHTML()
rightPanel.content = {...right}

const leftPanel = new PanelHTML({...left})
leftPanel.content = {...left}

const content = {
  className: 'panels-container',
  inner: [leftPanel.string, rightPanel.string]
}

const panels = new MyHTML(content).string
export { panels }
