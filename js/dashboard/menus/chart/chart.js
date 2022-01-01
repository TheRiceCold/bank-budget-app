const DPI = devicePixelRatio || 1
const S10 = 10 * DPI
const S5 = S10 / 2

const initCanvas = id => {
    let canvas = document.getElementById(id)
    let width = canvas.parentNode.clientWidth
    let height = canvas.parentNode.clientHeight
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    canvas.width = width * DPI
    canvas.height = height * DPI
    return canvas
}

export const getYSpace = (datasets, yEqual) => {
    let arr = datasets.map(item => 
        item.data.reduce((prev, current) => 
            prev > current ? prev : current))

    let len = Math.ceil(Math.max(...arr) / yEqual)
    let pow = len.toString().length - 1
    pow = pow > 2 ? 2 : pow
    return Math.ceil(len / Math.pow(10, pow)) * Math.pow(10, pow)
}

class Chart {
    constructor(id, options) {
        this.canvas = initCanvas(id)
        this.ctx = this.canvas.getContext('2d')

        this.showValue = true                  
        this.showGrid = true 
        this.topPadding = 60 * DPI
        this.leftPadding = 50 * DPI
        this.rightPadding = 10 * DPI
        this.bottomPadding = 50 * DPI
        this.yEqual = 5
        this.yLength = 0
        this.xLength = 0
        this.ySpace = 0
        this.bgColor = '#fff'
        this.axisColor = '#666'
        this.gridColor = '#aaa'
        this.title = {
            text: '',
            color: '#666',
            position: 'top',
            font: 'bold ' + 18 * DPI + 'px Arial',
            top: S10,
            bottom: S5
        }
        this.legend = {
            display: true,
            position: 'top',
            color: '#666',
            font: 14 * DPI + 'px Arial',
            top: 45 * DPI,
            bottom: 15 * DPI,
            textWidth: 0
        }
        this.colorList = [
            '#4A90E2',
            '#F5A623',
            '#ff5858',
            '#5e64ff',
            '#2AC766',
            '#743ee2',
            '#b554ff',
            '#199475'
        ]
        this.init(options)
    }
    
    init(options) {
        options.title = Object.assign({}, this.title, options.title)
        options.legend = Object.assign({}, this.legend, options.legend)
        Object.assign(this, options)

        this.drawBackground()
        this.renderBarChart()
    }

    renderBarChart() {
        this.yLength = Math.floor(
            (this.canvas.height - this.topPadding - this.bottomPadding - S10) / this.yEqual)
        this.xLength = Math.floor(
            (this.canvas.width - this.leftPadding - this.rightPadding - S10) / this.labels.length)
        this.ySpace = getYSpace(this.datasets, this.yEqual)
        this.drawXAxis()
        this.drawYAxis()
        this.drawBarContent()
    }

    drawBarContent() {
        let ctx = this.ctx
        let length = this.datasets.length
        ctx.beginPath()
        for (let i = 0; i < length; i++) {
            ctx.font = this.legend.font

            this.legend.textWidth += Math.ceil(ctx.measureText(this.datasets[i].label).width)
            ctx.fillStyle = ctx.strokeStyle = this.datasets[i].fillColor || this.colorList[i]
            const item = this.datasets[i].data

            for (let j = 0; j < item.length; j++) {
                if (j > this.labels.length - 1) 
                    continue
                
                let space = this.xLength / (length + 1)
                let ratio = this.yLength / this.ySpace
                let left = this.leftPadding + this.xLength * j + space * (i + 1 / 2)
                let right = left + space
                let bottom = this.canvas.height - this.bottomPadding
                let top = bottom - item[j] * ratio

                  let x = this.leftPadding + this.xLength * (j + 1 / 2)

                    ctx.beginPath()
                    ctx.arc(x, top, 3 * DPI, 0, 2 * Math.PI, true)
                    ctx.fill()
                    if (j !== 0) {
                        ctx.beginPath()
                        ctx.strokeStyle = this.datasets[i].fillColor || this.colorList[i]
                        ctx.lineWidth = 2 * DPI
                        ctx.moveTo(x - this.xLength, bottom - item[j - 1] * ratio)
                        ctx.lineTo(x, top)
                        ctx.stroke()
                        ctx.lineWidth = 1 * DPI
                    }
                    this.drawValue(item[j], x, top - S10)
            }
        }
        ctx.stroke()
    }
    
    drawValue(value, x, y) {
        let ctx = this.ctx
        if (!this.showValue) return 
        
        ctx.textBaseline = 'middle'
        ctx.font = 12 * DPI + 'px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(value, x, y)
    }

   drawBackground() {
        this.ctx.fillStyle = this.bgColor
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawTitle()
    }

    drawTitle() {
        let title = this.title
        if (!title.text) return
        
        let ctx = this.ctx
        ctx.beginPath()
        ctx.font = title.font
        ctx.textAlign = 'center'
        ctx.fillStyle = title.color
        if (title.position === 'top') {
            ctx.textBaseline = 'top'
            ctx.fillText(title.text, this.canvas.width / 2, title.top)
        } else {
            ctx.textBaseline = 'bottom'
            ctx.fillText(title.text, this.canvas.width / 2, this.canvas.height - title.bottom)
        }
    }

    drawXAxis() {
        let ctx = this.ctx
        let y = this.canvas.height - this.bottomPadding + 0.5

        ctx.beginPath()
        ctx.strokeStyle = this.axisColor
        ctx.moveTo(this.leftPadding, y)
        ctx.lineTo(this.canvas.width - this.rightPadding, y)
        ctx.stroke()
        this.drawXPoint()
    }

    drawXPoint() {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.font = 12 * DPI + 'px Microsoft YaHei'
        ctx.textBaseline = 'top'
        ctx.fillStyle = this.axisColor
        for (let i = 0; i < this.labels.length; i++) {
            let text = this.labels[i]
            let x = this.leftPadding + this.xLength * (i + 1) + 0.5
            let y = this.canvas.height - this.bottomPadding
            if (this.showGrid) {
                ctx.strokeStyle = this.gridColor
                ctx.moveTo(x, y)
                ctx.lineTo(x, this.topPadding + S10)
            } else {
                ctx.moveTo(x, y)
                ctx.lineTo(x, y - S5)
            }
            ctx.stroke()
            ctx.save()

            ctx.translate(x - this.xLength / 2, y + S5)
            ctx.fillText(text, 0, 0)
            ctx.restore()
        }
    }

    drawYAxis() {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.strokeStyle = this.axisColor
        ctx.moveTo(this.leftPadding - 0.5, this.canvas.height - this.bottomPadding + 0.5)
        ctx.lineTo(this.leftPadding - 0.5, this.topPadding + 0.5)
        ctx.stroke()
        this.drawYPoint()
    }

    drawYPoint() {
        let ctx = this.ctx
        ctx.font = 12 * DPI + 'px Microsoft YaHei'
        ctx.textAlign = 'right'
        ctx.textBaseline = 'middle'
        ctx.beginPath()
        for (let i = 0; i < this.yEqual; i++) {
            let x = this.leftPadding
            let y = this.canvas.height - this.bottomPadding - this.yLength * (i + 1) + 0.5
            if (this.showGrid) {
                ctx.strokeStyle = this.gridColor
                ctx.moveTo(x, y)
                ctx.lineTo(this.canvas.width - this.rightPadding - S10, y)
            } else {
                ctx.strokeStyle = this.axisColor
                ctx.moveTo(x - S5, y)
                ctx.lineTo(x, y)
            }
            ctx.stroke()
            ctx.save()
            ctx.fillStyle = this.axisColor

            ctx.translate(x - S10, y)
            ctx.fillText(this.ySpace * (i + 1), 0, 0)
            ctx.restore()
        }
    }

    drawLegendIcon(x, y, w, h) {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.strokeStyle = ctx.fillStyle
        ctx.lineWidth = 2 * DPI
        ctx.moveTo(x, y + S5)
        ctx.lineTo(x + 2 * S10, y + S5)
        ctx.stroke()
        ctx.lineWidth = 1 * DPI
        ctx.arc(x + S10, y + S5, 3 * DPI, 0, 2 * Math.PI, true)
        ctx.fill()
    }
}

export default Chart
