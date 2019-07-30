import { Line } from 'vue-chartjs'


export default {
  name: 'a-line-chart',
  extends: Line,
  props: {
    values: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  },
  computed: {
      data () {
        return {
          labels: this.labels,
          datasets: [{
            label: '',
            data: this.values,
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
        }
      },
      options () {
        return {
          responsive: true,
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
  watch: {
    'values': function () {
      this.renderChart(this.data, this.options)      
    },
    'labels': function () {
      this.$data._chart.update()
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
