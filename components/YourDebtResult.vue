<template>
    <section>
        <h2>jouw verwachte studieschuld:</h2>
        <div class="debt-circle-smaller" v-if="(this.$store.state.prevDuration + this.$store.state.postDuration) * this.$store.state.loanValue <= 13100">
            <span class="text-smaller">&euro;{{debtCalc}}</span>
        </div>
        <div class="debt-circle-bigger" v-if="(this.$store.state.prevDuration + this.$store.state.postDuration) * this.$store.state.loanValue > 13100">
            <span class="text-bigger">&euro;{{debtCalc}}</span>
        </div>

        <h2>Gemiddelde studieschuld:</h2>
        <div class="average-circle-smaller" v-if="(this.$store.state.prevDuration + this.$store.state.postDuration) * this.$store.state.loanValue >= 13100">
            <span class="text-smaller">&euro;13100</span>
        </div>
        <div class="average-circle-bigger" v-if="(this.$store.state.prevDuration + this.$store.state.postDuration) * this.$store.state.loanValue < 13100">
            <span class="text-bigger">&euro;13100</span>
        </div>
    </section>
</template>

<script>

export default {
    computed: {
        debtCalc() {
            return (this.$store.state.prevDuration + this.$store.state.postDuration) * this.$store.state.loanValue
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

span {
    color: #fdfdfd;
    text-align: center;
    width: 100%;
    display: block;
    margin: 3rem 0;
    font-family: 'Bangers', cursive;
    font-size: 1.8rem;
}

.debt-circle-smaller {
    background: linear-gradient(#9DAEB6, #3780AB);
    border-radius: 8rem;
    width: 6rem;
    height: 6rem;
    margin: 0.8rem 0;
    animation: 0.8s ease-in-out 0s 1 small;
}

.debt-circle-bigger {
    background: linear-gradient(#9DAEB6, #3780AB);
    border-radius: 8rem;
    width: 10rem;
    height: 10rem;
    margin: 0.8rem 0;
    animation: 0.8s ease-in-out 0s 1 bigger;
}

.average-circle-smaller {
    background: linear-gradient(#7F89AD, #6F79AA);
    border-radius: 8rem;
    width: 6rem;
    height: 6rem;
    margin: 0.8rem 0;
    animation: 0.8s ease-in-out 0s 1 small;
}

.average-circle-bigger {
    background: linear-gradient(#7F89AD, #6F79AA);
    border-radius: 8rem;
    width: 10rem;
    height: 10rem;
    margin: 0.8rem 0;
    animation: 0.8s ease-in-out 0s 1 bigger;
}

.text-bigger {
    font-size: 2rem;
    margin: 4rem 0;
}

.text-smaller {
    font-size: 1.6rem;
    margin: 2rem 0;
}

@keyframes small {
  0% {
    width: 0rem;
    height: 0rem;
  }

  50% {
    width: 6.5rem;
    height: 6.5rem;
  }
  100% {
    width: 6rem;
    height: 6rem;
  }
}

@keyframes bigger {
  0% {
    width: 0rem;
    height: 0rem;
  }

  50% {
    width: 10.5rem;
    height: 10.5rem;
  }
  100% {
    width: 10rem;
    height: 10rem;
  }
}

</style>