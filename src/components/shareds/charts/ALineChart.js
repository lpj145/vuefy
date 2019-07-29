import { Line } from 'vue-chartjs'

export default {
  name: 'a-line-chart',
  extends: Line,
  data: () => {
    return {
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '',
          data: [0, 20, 10, 30, 15, 30],
          borderCapStyle: 'rounded',
          pointBackgroundColor: 'rgba(94, 114, 228, 0.5)',
          pointHoverBackgroundColor: 'rgba(94, 114, 228, 1)',
          pointBorderColor: 'transparent',
          pointBorderWith: 15,
          pointRadius: 6,
          pointHoverRadius: 12,
          backgroundColor: [
            'rgba(255, 255, 255, 1)'
          ],
          borderColor: [
            'rgba(94, 114, 228, 1)'
          ],
          borderWidth: 6,
          fill: false
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
              fontFamily: 'Quicksand',
              padding: 5,
              fontColor: 'rgba(122,138,158, 1)'
            },
            gridLines: {
              color: 'rgba(0, 0, 0, 0.12)',
              borderDash: [6, 6],
              drawBorder: false,
              display: true,
              zeroLineColor: 'transparent'
            }
          }],
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false,
              zeroLineColor: 'transparent'
            },
            ticks: {
              padding: 10,
              fontFamily: 'Quicksand',
              fontColor: 'rgba(122,138,158, 1)'
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
