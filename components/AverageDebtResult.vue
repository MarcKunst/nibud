<template>
    <section>
        <h2>Gemiddelde studieschuld</h2>
        <div class="debt-circle">
            <span>&euro;{{averageDebt}}</span>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            averageDebt: "13100"
        }
    }
}
</script>

<style scoped>

section {
    display: flex;
    flex-direction: column;
     align-items: center;
}

h2 {
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    text-align: center;
    color: #fdfdfd;
    font-size: 1rem;
    margin-top: 1.5rem;

}

.debt-circle {
    background: linear-gradient(#4C5896, #8B94BA);
    border-radius: 8rem;
    width: 8rem;
    height: 8rem;
    margin: 0.8rem 0;
}

span {
    color: #fdfdfd;
    text-align: center;
    width: 100%;
    display: block;
    margin: 3rem 0;
    font-family: 'Bangers', cursive;
    font-size: 1.8rem;
}
</style>