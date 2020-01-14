<template>
    <div id="duration-container">
        <input type="radio" id="one" value="Minder dan 1 jaar" name="duration" v-model="picked">
        <label for="one">Minder dan 1 jaar</label>
        <br>
        <input type="radio" id="two" value="1 jaar" name="duration" v-model="picked">
        <label for="two">1 jaar</label>
        <br>
        <input type="radio" id="three" value="2 jaar" name="duration" v-model="picked">
        <label for="three">2 jaar</label>
        <br>
        <input type="radio" id="four" value="3 jaar" name="duration" v-model="picked">
        <label for="four">3 jaar</label>
        <br>
        <input type="radio" id="five" value="4 jaar" name="duration" v-model="picked">
        <label for="five">4 jaar</label>
        <br>
        <span>Picked: {{ picked }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return{
            picked: ""
        }
    },

    // computed: {
    // ...mapState({
    //   picked: state => state.debtvar.durTillGrad
    // })
    // }
}


</script>

<style scoped>
#duration-container {
    margin-top: 10rem;
}

.default--white {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1rem;
  color: #fdfdfd;
}
</style>