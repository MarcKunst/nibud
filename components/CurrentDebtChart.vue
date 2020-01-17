<template>
  <BarChart :chart-data="datacollection">
      
  </BarChart>
</template>

<script>
import BarChart from "./CurrentDebtChart.js"

export default {
    components: {
        BarChart
    },
    data() {
        return {
            datacollection: null,
            loaded: false,
            percentageStudents: [48.7, 10.3, 4.6, 20.5, 17.9, 0, 0]
        }
    },
    mounted() {
        this.fillData()
        Chart.defaults.scale.gridLines.display = false
        Chart.defaults.global.defaultFontColor = '#fdfdfd'
        Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        Chart.defaults.global.legend.labels.boxWidth = 0
    },
    methods: {
        fillData(){
            this.datacollection = {
                labels: ['Geen schuld', '€2.500', '€7.500', '€15.000', '€25.000', '€35.000', '€45.000'],
                datasets: [
                    {
                    label: 'Aantal studenten (%)',
                    barPercentage: 1.0,
                    barThickness: 'flex',
                    maxBarThickness: 30,
                    minBarLength: 6,
                    data: this.percentageStudents,
                    backgroundColor: "#fdfdfd",
                    hoverBackgroundColor: "#91054D",
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>