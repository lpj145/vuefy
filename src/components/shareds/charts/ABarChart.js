import { Bar } from 'vue-chartjs'

export default {
  name: 'a-bar-chart',
  extends: Bar,
  props: {
    values: Array,
    labels: Array
  },
  data () {
    return {
      data: {
        labels: this.labels,
        datasets: [{
          label: '',
          data: this.values,
          pointBackgroundColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: 'rgba(251,99,64, 1)',
          borderWidth: 0,
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
    if (this.labels === undefined || this.values === undefined) {
      throw 'Not inserted labels and values properties! for ABarChart component'
    }

    this.renderChart(
      this.data,
      this.options
    )
  },
}