<template>
  <BarChart class="barchart" :chart-data="datacollection">
  </BarChart>
  
</template>

<script>
import BarChart from "./BudgetCompare.js"
import BudgetData from "../static/studentenbegroting.json"

export default {
    components: {
        BarChart
    },
    data() {
        return {
            datacollection: null,
            loaded: false,
            income: [this.$store.state.job +
                    this.$store.state.healthCareAllowance +
                    this.$store.state.housingAllowance +
                    this.$store.state.parents +
                    this.$store.state.othersIncome
                    , BudgetData[1].InkomstenTotaal],
            expenses: [this.$store.state.tuitionFeesCost +
                    this.$store.state.housingCost +
                    this.$store.state.healthInsuranceCost +
                    this.$store.state.phoneCost +
                    this.$store.state.groceriesCost +
                    this.$store.state.clothingCost +
                    this.$store.state.leasureCost +
                    this.$store.state.othersCost
                    , BudgetData[1].UitgavenTotaal]
        }
    },
    mounted() {
        this.fillData()
        Chart.defaults.scale.gridLines.display = false
        Chart.defaults.global.defaultFontColor = '#fdfdfd'
        Chart.defaults.global.defaultFontFamily = "Roboto, 'Helvetica Neue', Arial, sans-serif"
        Chart.defaults.global.legend.labels.boxWidth = 12
        Chart.defaults.scale.ticks.beginAtZero = true
        Chart.defaults.global.legend.position = 'bottom'
        Chart.defaults.global.legend.align = 'start'
    },
    methods: {
        fillData(){
            this.datacollection = {
                labels: ['jouw begroting', 'gemiddelde student'],
                datasets: [
                    {
                    label: 'inkomsten',
                    barPercentage: 1.0,
                    barThickness: 'flex',
                    maxBarThickness: 40,
                    minBarLength: 6,
                    data: this.income,
                    backgroundColor: "#99135F",
                    hoverBackgroundColor: "#99135F",
                    },
                    {
                    label: 'uitgaven',
                    barPercentage: 1.0,
                    barThickness: 'flex',
                    maxBarThickness: 40,
                    minBarLength: 6,
                    data: this.expenses,
                    backgroundColor: "#081125",
                    hoverBackgroundColor: "#081125",
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>

.barchart {
    margin: 3rem 0;

}
</style>