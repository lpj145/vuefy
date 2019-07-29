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
            <v-btn class="mr-2" small text color="success">Month</v-btn>
            <v-btn text class="text-muted" small dark>Week</v-btn>
          </v-flex>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <a-line-chart height="150"></a-line-chart>
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
          <a-bar-chart :height="322"></a-bar-chart>
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
          <a-pie-chart height="150"></a-pie-chart>
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
          <a-doughnut-chart height="150"></a-doughnut-chart>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
