const DPI = window.devicePixelRatio || 1
const S10 = 10 * DPI
const S5 = S10 / 2

const initCanvas = id => {
    let canvas = document.getElementById(id)
    let width = canvas.parentNode.clientWidth
    let height = canvas.parentNode.clientHeight
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    canvas.width = width * DPI;
    canvas.height = height * DPI;
    return canvas;
}

export const getYSpace = (datasets, yEqual) => {
    let arr = datasets.map(item => 
        item.data.reduce((prev, current) => prev > current ? prev : current)
    )
    let len = Math.ceil(Math.max(...arr) / yEqual)
    let pow = len.toString().length - 1
    pow = pow > 2 ? 2 : pow
    return Math.ceil(len / Math.pow(10, pow)) * Math.pow(10, pow)
}
class Chart {
    constructor(id, options) {
        this.canvas = initCanvas(id)
        this.ctx = this.canvas.getContext('2d')
        this.type = 'bar'
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
        this.xRorate = 0
        this.yRorate = 0
        this.xRotate = 0
        this.yRotate = 0
        this.bgColor = '#fff'
        this.axisColor = '#666'
        this.gridColor = '#eee'
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
        };
        this.radius = 100 * DPI
        this.innerRadius = 60 * DPI
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
        Object.assign(this, options);

        this.drawBackground();
        if (this.type === 'bar' || this.type === 'line') 
            this.renderBarChart();
        else 
            this.renderPieChart();
        
        this.drawLegend();
    }

    renderBarChart() {
        this.yLength = Math.floor((this.canvas.height - this.topPadding - this.bottomPadding - S10) / this.yEqual);
        this.xLength = Math.floor((this.canvas.width - this.leftPadding - this.rightPadding - S10) / this.labels.length);
        this.ySpace = getYSpace(this.datasets, this.yEqual);
        this.drawXAxis();
        this.drawYAxis();
        this.drawBarContent();
    }

    drawBarContent() {
        let ctx = this.ctx;
        let length = this.datasets.length;
        ctx.beginPath();
        for (let i = 0; i < length; i++) {
            ctx.font = this.legend.font;

            this.legend.textWidth += Math.ceil(ctx.measureText(this.datasets[i].label).width);
            ctx.fillStyle = ctx.strokeStyle = this.datasets[i].fillColor || this.colorList[i];
            const item = this.datasets[i].data;

            for (let j = 0; j < item.length; j++) {
                if (j > this.labels.length - 1) 
                    continue;
                
                let space = this.xLength / (length + 1);
                let ratio = this.yLength / this.ySpace;
                let left = this.leftPadding + this.xLength * j + space * (i + 1 / 2);
                let right = left + space;
                let bottom = this.canvas.height - this.bottomPadding;
                let top = bottom - item[j] * ratio;

                if (this.type === 'bar') {
                    ctx.fillRect(
                        left,
                        top,
                        right - left,
                        bottom - top
                    );
                    this.drawValue(item[j], left + space / 2, top - S5);
                } else if (this.type === 'line') {
                    let x = this.leftPadding + this.xLength * (j + 1 / 2);
                    // 折点小圆圈
                    ctx.beginPath();
                    ctx.arc(x, top, 3 * DPI, 0, 2 * Math.PI, true);
                    ctx.fill();
                    if (j !== 0) {
                        ctx.beginPath();
                        ctx.strokeStyle = this.datasets[i].fillColor || this.colorList[i];
                        ctx.lineWidth = 2 * DPI;
                        ctx.moveTo(x - this.xLength, bottom - item[j - 1] * ratio);
                        ctx.lineTo(x, top);
                        ctx.stroke();
                        ctx.lineWidth = 1 * DPI;
                    }
                    this.drawValue(item[j], x, top - S10);
                }
            }
        }
        ctx.stroke();
    }

    renderPieChart() {
        let ctx = this.ctx;
        let length = this.labels.length;
        let item = this.datasets[0];
        let data = item.data;
        let total = data.reduce((prev, current) =>  prev + current)

        let circular = -Math.PI / 2;
        let x = this.canvas.width / 2;
        let y = this.canvas.height / 2;
        for (let i = 0; i < length; i++) {
            ctx.font = this.legend.font;
            this.legend.textWidth += Math.ceil(ctx.measureText(this.labels[i]).width);
            ctx.beginPath();

            ctx.strokeStyle = ctx.fillStyle = (item.colorList && item.colorList[i]) || this.colorList[i];
            ctx.moveTo(x, y);

            let start = circular;
            circular += data[i] / total * 2 * Math.PI;
            let end = circular;

            ctx.arc(x, y, this.radius, start, end);
            ctx.closePath();
            ctx.fill();

            let middle = (start + end) / 2;
            this.drawPieValue(data[i], middle);
        }
    }

    drawValue(value, x, y) {
        let ctx = this.ctx
        if (!this.showValue) return 
        
        ctx.textBaseline = 'middle'
        ctx.font = 12 * DPI + 'px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(value, x, y)
    }

    drawPieValue(value, middle) {
        let ctx = this.ctx
        if (!this.showValue) return 
        
        let x = this.canvas.width / 2
        let y = this.canvas.height / 2
        let x1 = Math.ceil(Math.abs(this.radius * Math.cos(middle)))
        let y1 = Math.floor(Math.abs(this.radius * Math.sin(middle)))
        ctx.textBaseline = 'middle'

        if (this.showValue) {
            if (middle <= 0) {
                ctx.textAlign = 'left'
                ctx.moveTo(x + x1, y - y1)
                ctx.lineTo(x + x1 + S10, y - y1 - S10)
                ctx.moveTo(x + x1 + S10, y - y1 - S10)
                ctx.lineTo(x + x1 + 3 * S10, y - y1 - S10)
                ctx.stroke()
                ctx.fillText(value, x + x1 + 3.5 * S10, y - y1 - S10)
            } else if (middle > 0 && middle <= Math.PI / 2) {
                ctx.textAlign = 'left'
                ctx.moveTo(x + x1, y + y1)
                ctx.lineTo(x + x1 + S10, y + y1 + S10)
                ctx.moveTo(x + x1 + S10, y + y1 + S10)
                ctx.lineTo(x + x1 + 3 * S10, y + y1 + S10)
                ctx.stroke()
                ctx.fillText(value, x + x1 + 3.5 * S10, y + y1 + S10)
            } else if (middle > Math.PI / 2 && middle < Math.PI) {
                ctx.textAlign = 'right'
                ctx.moveTo(x - x1, y + y1)
                ctx.lineTo(x - x1 - S10, y + y1 + S10);
                ctx.moveTo(x - x1 - S10, y + y1 + S10);
                ctx.lineTo(x - x1 - 3 * S10, y + y1 + S10)
                ctx.stroke();
                ctx.fillText(value, x - x1 - 3.5 * S10, y + y1 + S10)
            } else {
                ctx.textAlign = 'right'
                ctx.moveTo(x - x1, y - y1)
                ctx.lineTo(x - x1 - S10, y - y1 - S10)
                ctx.moveTo(x - x1 - S10, y - y1 - S10)
                ctx.lineTo(x - x1 - 3 * S10, y - y1 - S10)
                ctx.stroke()
                ctx.fillText(value, x - x1 - 3.5 * S10, y - y1 - S10)
            }
        }
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
        ctx.beginPath();
        ctx.font = 12 * DPI + 'px Microsoft YaHei'
        ctx.textAlign = (this.xRorate || this.xRotate) ? 'right' : 'center'
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
            if (this.xRorate) ctx.rotate(-this.xRorate * Math.PI / 180)
            else ctx.rotate(-this.xRotate * Math.PI / 180)
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
        let ctx = this.ctx;
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
            if (this.yRorate) ctx.rotate(-this.yRorate * Math.PI / 180)
            else ctx.rotate(-this.yRotate * Math.PI / 180)
            ctx.fillText(this.ySpace * (i + 1), 0, 0)
            ctx.restore()
        }
    }

    drawLegend() {
        let legend = this.legend

        if (legend.display) {
            let ctx = this.ctx
            let pie = this.type === 'pie'
            ctx.beginPath()
            ctx.font = legend.font
            ctx.textAlign = 'left'
            ctx.textBaseline = 'middle'

            let length = pie ? this.labels.length : this.datasets.length;
            let x = (this.canvas.width - (this.legend.textWidth + (5 * length - 2) * S10)) / 2
            let textWidth = 0

            for (let i = 0; i < length; i++) {
                const item = pie ? this.datasets[0] : this.datasets[i]
                const text = (pie ? this.labels[i] : item.label) || ''
                ctx.fillStyle = (item.colorList && item.colorList[i]) || item.fillColor || this.colorList[i]

                if (legend.position === 'top') {
                    this.drawLegendIcon(x + (5 * S10 * i) + textWidth, legend.top - S5, 2 * S10, S10)
                    ctx.fillStyle = legend.color
                    ctx.fillText(text, x + (5 * i + 3) * S10 + textWidth, legend.top)
                } else if (legend.position === 'bottom') {
                    this.drawLegendIcon(x + (5 * S10 * i) + textWidth, this.canvas.height - legend.bottom - S5, 2 * S10, S10)
                    ctx.fillStyle = legend.color
                    ctx.fillText(text, x + (5 * i + 3) * S10 + textWidth, this.canvas.height - legend.bottom)
                } else {
                    ctx.fillRect(S10, legend.top + 2 * S10 * i, 2 * S10, S10)
                    ctx.fillStyle = legend.color
                    ctx.fillText(text, 4 * S10, legend.top + 2 * S10 * i + 0.5 * S10)
                }
                textWidth += Math.ceil(ctx.measureText(text).width)
            }
        }
    }

    drawLegendIcon(x, y, w, h) {
        let ctx = this.ctx
        if (this.type === 'line') {
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
        else ctx.fillRect(x, y, w, h)
    }
}

export default Chart
