<template>
  
</template>

<script>
import { Line } from 'vue-chartjs'
export default {
   props: ['data', 'options'],
   mounted() {
      this.renderChart({
         labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
         datasets: [{
            lineTension: 0,
            borderWidth: 1,
            borderColor: '#F2A727',
            pointBackgroundColor: '#F2A727',
            backgroundColor: 'transparent',
            data: [40, 20, 12, 39, 10, 30]
         }]
      }, {
         legend: { //hides the legend
            display: false,
         },
         scales: { //hides the y axis
            yAxes: [{
               display: false
            }]
         }
      })
   }
}
</script>

<style>

</style>