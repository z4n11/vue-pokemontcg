<template>
  <div :class="$style.cardBackground">
    <div :class="$style.cardContainer">
      <span style="grid-area: pokeId">{{pokemonData.id}}</span>
      <span style="grid-area: pokeName">{{pokemonData.name}}</span>
      <div style="grid-area: type; display: flex;">
        <TypeTag
          v-for="pokemonType in pokemonData.types"
          :key="pokemonType.id"
          :content="pokemonType"
        />
      </div>
      <img
        style="grid-area: card"
        :class="$style.card"
        :src="pokemonData.images.small"
        @click="openPokemonDetails()"
      />
    </div>
  </div>
</template>

<script>
import TypeTag from './../TypeTag'
import { mapMutations } from 'vuex'
export default {
  components: {
    TypeTag
  },
  props: {
    pokemonData: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['setSelectedPokemon']),
    openPokemonDetails () {
      this.setSelectedPokemon(this.pokemonData)
      this.$router.push({ name: 'pokemonDetailsView', params: { pokename: this.pokemonData.name, pokeid: this.pokemonData.id } }).catch(() => { })
    }
  }
}
</script>

<style lang="scss" module>
.card {
  padding: 0.5rem;
  max-width: 15rem;
  &:hover {
    cursor: pointer;
  }
}
.cardContainer {
  display: grid;
  grid-template-areas: "pokeId pokeName" "type type" "card card";
  justify-content: center;
  align-items: center;
  grid-template-rows: repeat(2, 2rem) auto;
  padding-top: 1rem;
}
.cardBackground {
  height: 28rem;
  width: 20rem;
  background-color: white;
  border-radius: 2rem;
  margin: 1rem;
}
</style>
