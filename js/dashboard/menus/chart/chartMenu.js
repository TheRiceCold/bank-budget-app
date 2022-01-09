import MenuHTML from '../../html/MenuHTML.js'
import Chart from './linechart.js'

class ChartMenu extends MenuHTML {
  constructor() {
    const content = '<canvas id="canvas"></canvas>'
    const id = 'chartMenu'
    const title = 'Chart'
    super({ id: id, inner: content, title: title })
  }
  manager() {
    new Chart('canvas', {
      title: { text: 'Daily Chart' },
      bgColor: 'whitesmoke',
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
          {
              data: [234, 278, 270, 190, 230]
          },
          {
              data: [164, 178, 150, 135, 160]
          },
          {
              data: [114, 138, 200, 235, 190]
          }
      ]
    })
   }
}

export default ChartMenu
