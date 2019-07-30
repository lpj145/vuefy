<script>
import {
  ABarChart,
  APieChart,
  ALineChart,
  ADoughnutChart
} from '../components/shareds/charts'

export default {
  name: 'charts',
  components: {
    ABarChart,
    APieChart,
    ALineChart,
    ADoughnutChart
  },
  data () {
    return {
      selectedFilterMonth: true
    }
  },
  methods: {
    changeLineChartData (month) {
      this.selectedFilterMonth = month
    }
  },
  computed: {
    valuesLineChart () {
      if (this.selectedFilterMonth) {
        return [99, 118, 245, 299, 315, 198]
      }
      return [55, 69, 33, 82, 49, 55]
    }
  }
}
</script>

<template>
  <v-layout wrap>
    <v-flex xs12 md8>
      <v-card color="dark" class="card-shadow">
        <v-card-title>
          <v-flex px-1 py-0>
            <h5 class="text-muted caption mb-0">STATISTICS</h5>
            <h2 class="white--text title font-weight-bold mt-0">Social Performance</h2>
          </v-flex>
          <v-flex shrink pa-1>
            <v-btn @click="changeLineChartData(true)" text :class="[selectedFilterMonth ? 'success--text' : 'text-muted' ,'mr-2']" small>Month</v-btn>
            <v-btn @click="changeLineChartData(false)" text :class="[!selectedFilterMonth ? 'success--text' : 'text-muted']" small>Week</v-btn>
          </v-flex>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <a-line-chart
            ref="lineChart"
            :height="150"
            :values="valuesLineChart"
            :labels="['Jan', 'Fev', 'Mar','Abr', 'Mai', 'Jun']"
          >
          </a-line-chart>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="card-shadow">
        <v-card-title>
          <v-flex px-1 py-0>
            <h5 class="text-muted caption mb-0">LEVERS</h5>
            <h2 class="dark-text title font-weight-bold mt-0">Sales</h2>
          </v-flex>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <a-bar-chart
            :labels="['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']"
            :values="[22, 32, 42, 99, 149, 82]"
            :height="322"
          ></a-bar-chart>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card class="card-shadow">
        <v-card-title>
          <v-flex px-1 py-0>
            <h5 class="text-muted caption mb-0">LEVERS</h5>
            <h2 class="dark-text title font-weight-bold mt-0">Sales</h2>
          </v-flex>
        </v-card-title>
        <v-card-text>
          <a-pie-chart :height="150"></a-pie-chart>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card class="card-shadow">
        <v-card-title>
          <v-flex px-1 py-0>
            <h5 class="text-muted caption mb-0">LEVERS</h5>
            <h2 class="dark-text title font-weight-bold mt-0">Sales</h2>
          </v-flex>
        </v-card-title>
        <v-card-text>
          <a-doughnut-chart :height="150"></a-doughnut-chart>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
