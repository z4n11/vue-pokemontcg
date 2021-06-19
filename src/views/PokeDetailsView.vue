<template>
  <div
    :class="$style.pokemonDataContainer"
    :style="'background-color:'+ colorComputed"
  >
    <LoadingScreen
      v-show="loading"
      :fadeOut="!loading"
    />
    <div
      v-if="!loading"
      :class="$style.layout"
    >
      <img
        :src="selectedPokemon.images.large"
        :class="$style.pokemonCard"
      />
      <PokemonDetails :pokemonData="selectedPokemon" />
    </div>
  </div>
</template>

<script>
import { getTypeColor } from '../utils'
import { mapMutations, mapState } from 'vuex'
import LoadingScreen from '../components/LoadingScreen'
import PokemonDetails from '../components/pokemonDetails/PokemonDetails'
import { getSpecificPokemonCard, getRelatedPokemonCard } from '../services/api-service'
export default {
  data () {
    return {
      loading: false
    }
  },
  components: {
    LoadingScreen,
    PokemonDetails
  },
  computed: {
    ...mapState(['selectedPokemon']),
    colorComputed () {
      const pokemonType = this.selectedPokemon !== null ? this.selectedPokemon.types[0] : 'null'
      return getTypeColor(pokemonType)
    }
  },
  async created () {
    this.loading = true
    try {
      if (this.selectedPokemon === null) {
        const response = await getSpecificPokemonCard(this.$route.params.pokeid)
        this.setSelectedPokemon(response.data[0])
      }
      await this.buildRelatedCardsArray()
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapMutations(['setSelectedPokemon']),
    async buildRelatedCardsArray () {
      const response = await getRelatedPokemonCard(this.$route.params.pokename)
      const relatedCards = this.mapRelatedCards(response.data)
      const selectedPokemonCopy = JSON.parse(JSON.stringify(this.selectedPokemon))
      selectedPokemonCopy.relatedCards = relatedCards
      this.setSelectedPokemon(selectedPokemonCopy)
    },
    mapRelatedCards (relatedCards) {
      const index = relatedCards.findIndex(card => card.id === this.selectedPokemon.id)
      relatedCards.splice(index, 1)
      return relatedCards.map(card => {
        return {
          id: card.id,
          name: card.name,
          image: card.images.small
        }
      })
    }
  }
}
</script>

<style lang='scss' module>
.layout {
  display: grid;
  grid-template-areas: "card pokemonData";
  height: 100%;
  width: 95%;
  grid-template-columns: 55rem 1fr;
  background-color: white;
  border-bottom-left-radius: 4rem;
  border-top-left-radius: 4rem;
  box-shadow: 0rem 2rem 4rem;
  align-items: center;
}
.pokemonCard {
  display: flex;
  max-width: 85%;
  justify-self: center;
  align-self: center;
}
.pokemonDataContainer {
  height: 100vh;
  width: 100vw;
  display: grid;
  justify-items: flex-end;
}
</style>
