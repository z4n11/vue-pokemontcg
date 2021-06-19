<template>
  <div :class="$style.pokemonListLayout">
    <div
      v-for="pokemonCard in searchPokemons"
      :key="pokemonCard.id"
    >
      <PokemonCard :pokemonData="pokemonCard" />
    </div>
  </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue'
import { getPokemonCards } from '../../services/api-service'
import { mapMutations, mapState } from 'vuex'
export default {
  components: {
    PokemonCard
  },
  props: {
    searchData: {
      type: String,
      required: true
    }
  },
  async created () {
    this.$emit('setLoading', true)
    try {
      if (this.pokemonCards.length === 0) {
        const response = await getPokemonCards()
        this.setPokemonCards(response.data.sort((a, b) => a.name.localeCompare(b.name)))
      }
    } finally {
      this.$emit('setLoading', false)
    }
  },
  computed: {
    ...mapState(['pokemonCards']),
    searchPokemons () {
      if (this.pokemonCards.length > 0) {
        return this.pokemonCards.filter(
          pokemonCard =>
            !this.searchData ||
            pokemonCard.name.toLowerCase().includes(this.searchData.toLowerCase()) ||
            pokemonCard.types.map(type => type.toLowerCase()).includes(this.searchData.toLowerCase())
        )
      } else {
        return []
      }
    }
  },
  methods: {
    ...mapMutations(['setPokemonCards'])
  }
}
</script>

<style lang="scss" module>
.pokemonListLayout {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
}
.listBackground {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
