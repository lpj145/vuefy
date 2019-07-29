import { Pie } from 'vue-chartjs'
export default {
  name: 'a-pie-chart',
  extends: Pie,
  data () {
    return {
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '',
          data: [4, 7, 3, 5, 2],
          borderCapStyle: 'rounded',
          pointBackgroundColor: 'rgba(255, 255, 255, 1)',
          backgroundColor: [
            'rgb(255, 99, 132)',
						'rgb(255, 159, 64)',
						'rgb(255, 205, 86)',
						'rgb(75, 192, 192)',
						'rgb(54, 162, 235)',
          ],
          borderWidth: 3,
          fill: true
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'right'
        },
        scales: {
          yAxes: [{
            display: false,
            barPercentage: 0.9,
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
            display: false,
            barPercentage: 0.9,
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
