<script>
import InfoCard from '../components/shareds/cards/InfoCard'
import FIcon from '../components/shareds/FIcon'
import TableData from '../data/tableCard.json'
import AInput from '../components/shareds/AInput'

export default {
  name: 'dashboard',
  components: {
    InfoCard,
    FIcon,
    AInput
  },
  data () {
    return {
      tableData: TableData
    }
  }
}
</script>

<template>
  <div>
    <v-layout wrap>
      <info-card md3 xs12 icon-bg-color="bg-warning" title="Enhancements" icon="BarChartIcon">
        <span>49,8%</span>
        <template v-slot:description>
          <span class="success-text mr-2"><f-icon icon="BellIcon" size="1.0x"></f-icon> 3.48%</span>
          <span class="">Best up this week!</span>
        </template>
      </info-card>
      <info-card md3 xs12 icon-bg-color="bg-info" title="Surprise" icon="SmileIcon">
        <span>49,8%</span>
        <template v-slot:description>
          <span class="info-text mr-2"><f-icon icon="HeartIcon" size="1.0x"></f-icon> 3.48%</span>
          <span class="">Than easily to use!</span>
        </template>
      </info-card>
      <info-card md3 xs12 icon-bg-color="bg-success" title="Shipments" icon="TruckIcon">
        <span>62</span>
        <template v-slot:description>
          <span class="success-text mr-2"><f-icon icon="TrendingUpIcon" size="1.0x"></f-icon></span>
          <span class="">4 more than passed week</span>
        </template>
      </info-card>
      <v-flex xs12 md3>
        <v-card class="elevation-0 radius-25 transparent">
          <v-card-text>
            <img src="../assets/undraw_innovative_b409.svg" alt="" style="height:101px;width:100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card class="card-shadow">
          <v-card-title class="body-1 font-weight-bold mb-3">
            <v-flex pa-1>
              FORM CARD
            </v-flex>
            <v-flex shrink pa-1>
              <v-menu offset-y dense>
                <template v-slot:activator="{on}">
                  <v-btn v-on="on" text small depressed color="primary" :ripple="false">
                    ACTIONS
                    <f-icon class="ml-2" icon="ChevronsDownIcon" size="1.0x"></f-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Action 1</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-flex>
          </v-card-title>
          <v-divider></v-divider>
          <v-simple-table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>PRICE</th>
                  <th>DATE</th>
                  <th>AUTHOR</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, key) in tableData" :key="key">
                  <td>{{item.name}}</td>
                  <td>{{item.price}}</td>
                  <td>{{item.date}}</td>
                  <td>{{item.author}}</td>
                </tr>
              </tbody>
            </v-simple-table>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card class="card-shadow">
          <v-form>
            <v-card-title class="body-1 font-weight-bold mb-3">
              <v-flex pa-1>
                FORM CARD
              </v-flex>
              <v-flex shrink pa-1>
                <v-btn class="mr-2" small text color="success">
                  SAVE
                </v-btn>
                <v-btn text color="dark" small dark>CANCEL</v-btn>
              </v-flex>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="px-5">
              <a-input
                label="Username"
                height="40"
                clearable
                placeholder="Username"
                hint="Please use only unique username"
              >
              </a-input>
              <label class="font-weight-bold d-block mb-2">Type</label>
              <v-select
                class="height-issue-fix"
                :items="['item', 'item2', 'item3']"
                flat
                outlined
                placeholder="Select one type"
                solo
                height="40"
                clearable
                hint="Select only"
              ></v-select>
              <label class="font-weight-bold d-block mb-2">Switchs Types</label>
              <v-radio-group :mandatory="false" row>
                <v-radio color="primary" label="Radio 1" value="radio-1"></v-radio>
                <v-radio color="primary" label="Radio 2" value="radio-2"></v-radio>
              </v-radio-group>
              <v-switch color="primary" inset label="Switch this"></v-switch>
              <v-checkbox label="label" color="primary"></v-checkbox>
              <label class="font-weight-bold d-block mb-2">Gran Text</label>
              <v-textarea
                outlined
                solo
                flat
              >
              </v-textarea>
              <label class="font-weight-bold d-block mb-2">Types</label>
              <v-select
                class="height-issue-fix"
                :items="['item', 'item2', 'item3']"
                flat
                outlined
                solo
                height="40"
                multiple
                placeholder="Select multiple types"
                clearable
              ></v-select>
            </v-card-text>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
