import MyHTML from '../../utils/MyHTML.js'
import FormsContainer from './forms/FormsContainer.js'
import PanelsContainer from './panels/PanelsContainer.js'

const content = {
  id: 'loginPage',
  inner: [ FormsContainer, PanelsContainer ]
}

export const loginPage = new MyHTML(content).asHTML()
