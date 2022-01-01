import Chart from './chart.js'

const getChart = () => 
    new Chart('canvas', {
    title: { text: 'Weekly Chart' },
    bgColor: 'whitesmoke',
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
        {
            label: 'blue',
            data: [234, 278, 270, 190, 230]
        },
        {
            label: 'yellow',
            data: [164, 178, 150, 135, 160]
        },
        {
            label: 'red',
            data: [114, 138, 200, 235, 190]
        }
    ]
})

export { getChart }
