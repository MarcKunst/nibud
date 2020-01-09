<template>
  <section class="container">
      <nav>
        <DebtSelect />
      </nav>
  </section>
</template>

<script>
import DebtSelect from '~/components/Debt-select.vue'

export default {
  components: {
    DebtSelect
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #EF7A52;
}
</style>