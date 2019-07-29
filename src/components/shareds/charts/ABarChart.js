import { Bar } from 'vue-chartjs'

export default {
  name: 'a-bar-chart',
  extends: Bar,
  props: {

  },
  data () {
    return {
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '',
          data: [4, 7, 3, 5, 2, 3],
          borderCapStyle: 'rounded',
          pointBackgroundColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: [
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)'
          ],
          borderColor: [
            'rgba(94, 114, 228, 0)',
            'rgba(94, 114, 228, 0)',
            'rgba(94, 114, 228, 0)',
            'rgba(94, 114, 228, 0)',
            'rgba(94, 114, 228, 0)',
            'rgba(94, 114, 228, 0)'
          ],
          borderWidth: 5,
          fill: false
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            barPercentage: 0.3,
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: 'rgba(0, 0, 0, 0.06)',
              borderDash: [6, 6],
              drawBorder: false,
              display: true,
              scaleLineColor: 'transparent',
              zeroLineColor: 'transparent'
            }
          }],
          xAxes: [{
            barPercentage: 0.3,
            gridLines: {
              color: 'transparent',
              drawBorder: false,
              display: true,
              zeroLineColor: 'transparent'
            }
          }]
        }
      }
    }
  },
  mounted() {
    this.renderChart(
      this.data,
      this.options
    )
  },
}