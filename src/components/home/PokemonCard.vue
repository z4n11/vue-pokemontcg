<template>
  <div :class="$style.cardBackground">
    <div :class="$style.cardContainer">
      <span :class="$style.pokeId">{{pokemonData.id}}<span :class="$style.pokeName">{{pokemonData.name}}</span></span>
      <div :class="$style.typeContainer">
        <TypeTag
          v-for="pokemonType in pokemonData.types"
          :key="pokemonType.id"
          :content="pokemonType"
        />
      </div>
      <img
        style="grid-area: card"
        :class="$style.card"
        :src="isMobile ? pokemonData.images.large : pokemonData.images.small"
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
  @include device("mobile") {
    max-width: 40rem;
    justify-self: center;
  }
  &:hover {
    cursor: pointer;
  }
}
.cardContainer {
  display: grid;
  grid-template-areas:
    "pokeId "
    "type"
    "card";
  justify-content: center;
  align-items: center;
  grid-template-rows: repeat(2, 3rem) auto;
  padding-top: 1rem;
}
.cardBackground {
  height: 28rem;
  width: 20rem;
  background-color: white;
  border-radius: 2rem;
  margin: 1rem;
  @include device("mobile") {
    height: unset;
    width: unset;
  }
}
.pokeId {
  grid-area: pokeId;
  font-size: 1.4rem;
  font-style: italic;
  @include device("mobile") {
    font-size: 2.4rem;
    padding-left: 3rem;
  }
}
.pokeName {
  grid-area: pokeName;
  font-size: 1.4rem;
  padding-left: 1rem;
  font-style: initial;
  font-weight: bold;
  @include device("mobile") {
    font-size: 2.4rem;
  }
}
.typeContainer {
  grid-area: type;
  display: flex;
  @include device("mobile") {
    padding-left: 2.5rem;
  }
}
</style>
