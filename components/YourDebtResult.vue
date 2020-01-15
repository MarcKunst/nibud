<template>
    <div class="debt-container">
        <span>{{yourDebt}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            yourDebt: "100"
        }
    },
    computed: {
        loan() {
            return this.$store.state.loanPerMonth;
        }
    }
}
</script>

<style scoped>

span {
    color: white;
    text-align: center;
    width: 100%;
    display: block;
    margin: 3rem 0;
}
</style>