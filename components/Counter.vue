<template>
    <div id="counter-container">
        <p class="loan-info-text">
            Wist je dat de gemiddelde student
        </p>
        <animated-number class="loan-average"
        :value="value" 
        :formatValue="formatToPrice" 
        :duration="1000"
        />
        <p class="loan-info-text">
        leent per maand?
      </p>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber
  },
  data() {
    return {
      value: 560
    }
  },
  methods: {
    formatToPrice(value) {
      return `&euro; ${value.toFixed()}`;
    }
  }
};
</script>

<style scoped>
#counter-container {
    margin-top: 4rem;
}

.loan-info-text {
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 1rem;
    color: #fdfdfd;
    text-align: center;
}

.loan-average {
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: #fdfdfd;
    text-align: center;
    display: block;
}
</style>