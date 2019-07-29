import { Doughnut } from 'vue-chartjs'

const randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

export default {
  name: 'a-doughnut-chart',
  extends: Doughnut,
  data: () => {
    return {
      data: {
        datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(255, 159, 64)',
						'rgb(255, 205, 86)',
						'rgb(75, 192, 192)',
						'rgb(54, 162, 235)',
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Orange',
					'Yellow',
					'Green',
					'Blue'
				]
      },
      options: {
				responsive: true,
				legend: {
					position: 'left',
				},
				title: {
					display: false,
					text: 'Chart.js Doughnut Chart'
				},
				animation: {
					animateScale: true,
					animateRotate: true
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
