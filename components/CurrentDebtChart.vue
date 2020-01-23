<template>
<div class="bar-container">
      <BarChart :chart-data="datacollection">
      
  </BarChart>
</div>

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
        Chart.defaults.global.defaultFontFamily = "Roboto, 'Helvetica Neue', Arial, sans-serif"
        Chart.defaults.global.legend.labels.boxWidth = 0
    },
    methods: {
        fillData(){
            this.datacollection = {
                labels: ['Geen schuld', '€1.000 - €5.000', '€5.000 - €10.000', '€10.000 - €20.000', '€20.000 - €30.000', '€30.000 - €40.000', '€40.000 >'],
                datasets: [
                    {
                    label: 'Aantal studenten (%)',
                    barPercentage: 1.0,
                    barThickness: 'flex',
                    maxBarThickness: 30,
                    minBarLength: 6,
                    data: this.percentageStudents,
                    backgroundColor: "#fdfdfd",
                    hoverBackgroundColor: "#5E92B0",
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>

.bar-container {
    width: 100%;
}

@media only screen and (min-width : 768px) {

    .bar-container {
        width: 50%;
    }

}

@media only screen  and (min-width : 1224px)  {

    .bar-container {
        width: 15%;
        height: 15%;
    }

}

</style>