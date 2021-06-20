<template>
  <div :class="pokemonDataContainerStyle">
    <PokemonDetailsHeader
      style="grid-area: header"
      :pokemonData="pokemonData"
    />
    <PokemonAttacks
      style="grid-area: attack"
      :pokemonData="pokemonData"
    />
    <PokemonDetailsRelatedCards
      v-if="pokemonData.relatedCards"
      style="grid-area: relatedCards;"
      :pokemonData="pokemonData"
    />
  </div>
</template>

<script>
import PokemonAttacks from './PokemonAttacks.vue'
import PokemonDetailsHeader from './PokemonDetailsHeader'
import PokemonDetailsRelatedCards from './PokemonDetailsRelatedCards'
export default {
  components: {
    PokemonDetailsHeader,
    PokemonAttacks,
    PokemonDetailsRelatedCards
  },
  props: {
    pokemonData: {
      type: Object,
      retuired: true
    }
  },
  computed: {
    pokemonDataContainerStyle () {
      return this.pokemonData.attacks.length > 1 ? [this.$style.pokemonDataContainer, this.$style.pokemonDataContainerTwoAttacks] : this.$style.pokemonDataContainer
    }
  }
}
</script>

<style lang="scss" module>
.pokemonDataContainer {
  display: grid;
  background-color: #333231;
  margin-left: 1rem;
  box-shadow: 0rem 1rem 1rem;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  padding-left: 4rem;
  padding-top: 6rem;
  grid-template-areas:
    "header"
    "attack"
    "relatedCards";
  grid-template-rows: 15rem 20rem 1fr;
  @include device("mobile") {
    margin: 0;
    box-shadow: 0rem 0rem 1rem;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 0;
    padding-left: 2rem;
    padding-top: 6rem;
    grid-template-areas:
      "header"
      "attack"
      "relatedCards";
    grid-template-rows: 30rem 20rem 1fr;
  }
}
.pokemonDataContainerTwoAttacks {
  @include device("mobile") {
    display: grid;
    grid-template-rows: 30rem 36rem 1fr !important;
  }
}
</style>
