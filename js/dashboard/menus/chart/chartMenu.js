import MenuHTML from '../../html/MenuHTML.js'

class ChartMenu extends MenuHTML {
  constructor() {
    const content = '<canvas id="canvas"></canvas>'
    super({ inner: content })
  }
  manager() {
  }
}

export default ChartMenu
