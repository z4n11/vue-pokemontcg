<template>
  <div>
    <LoadingScreen :fadeOut="!loading" />
    <div :class="$style.layout">

      <Header @setSearchData="searchData = $event" />
      <PokemonCardsList
        v-show="!isMobile"
        :searchData="searchData"
      />
      <MobilePokemonCardsCarousel
        v-show="isMobile"
        :searchData="searchData"
      />
    </div>
  </div>
</template>

<script>
import Header from '../components/home/Header'
import PokemonCardsList from '../components/home/PokemonCardsList'
import MobilePokemonCardsCarousel from '../components/home/MobilePokemonCardsCarousel.vue'
import LoadingScreen from '../components/LoadingScreen'
import { getPokemonCards } from '../services/api-service'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      searchData: '',
      loading: false
    }
  },
  components: {
    LoadingScreen,
    Header,
    PokemonCardsList,
    MobilePokemonCardsCarousel
  },
  computed: {
    ...mapState(['pokemonCards'])
  },
  async created () {
    this.loading = true
    try {
      if (this.pokemonCards.length === 0) {
        const response = await getPokemonCards()
        this.setPokemonCards(response.data.sort((a, b) => a.name.localeCompare(b.name)))
      }
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapMutations(['setPokemonCards'])
  }
}
</script>

<style lang="scss" module>
.layout {
  display: grid;
  grid-template-areas: "header" "pokeCardsList";
  grid-template-rows: 10rem 1fr;
  height: 100vh;
  overflow: hidden;
}
.background {
  display: flex;
  justify-content: center;
}
</style>
