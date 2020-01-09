<template>
    <div id="counter-container">
      <p class="loan-info-text">
        Wist je dat de gemiddelde student
      </p>
      <h1 class="loan-average">
        &euro;542
      </h1>
      <p class="loan-info-text">
        per maand leent
      </p>
    </div>
</template>

<style scoped>
#counter-container {
    margin-top: 10rem;
}

.loan-info-text {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1rem;
  color: #fdfdfd;
}

.loan-average {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 3rem;
    color: #fdfdfd;
}
</style>