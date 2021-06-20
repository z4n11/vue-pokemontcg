<template>
  <div>
    <carousel
      :class="$style.carouselContainer"
      :perPage="1"
      :paginationEnabled="false"
    >
      <slide
        style="padding-bottom: 5rem;"
        v-for="card in searchPokemons"
        :key="card.id"
      >
        <PokemonCard :pokemonData="card" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue'
import { Carousel, Slide } from 'vue-carousel'
import { mapState } from 'vuex'
export default {
  props: {
    searchData: {
      type: String,
      required: true
    }
  },
  components: {
    PokemonCard,
    Carousel,
    Slide
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
  }
}
</script>

<style lang='scss' module>
.carouselContainer {
  display: grid;
  align-content: center;
  height: 100%;
  padding-bottom: 2rem;
}
</style>
