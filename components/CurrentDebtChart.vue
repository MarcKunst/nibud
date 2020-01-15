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
            loaded: false
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData(){
            this.datacollection = {
                labels: ['Geen schuld', '€1000 - €5000', '€5000 - €10000', '€10000 - €20000', '€20000 - €30000', '€30000 - €40000', '€40000 of hoger'],
                datasets: [
                    {
                    barPercentage: 1.0,
                    barThickness: 'flex',
                    maxBarThickness: 30,
                    minBarLength: 4,
                    data: [0, 10, 20, 30, 40, 50, 60],
                    backgroundColor: "#3881AB",
                    hoverBackgroundColor: "#91054D",
                    }
                ]
            }
        }
    },
    options: {
        legend: {
            labels: {
                fontColor: "#fdfdfd",
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#fdfdfd",
                    fontSize: 18,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#fdfdfd",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    }
}
</script>

<style scoped>

</style>