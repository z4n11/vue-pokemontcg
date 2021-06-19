<template>
  <div>
    <LoadingScreen
      v-show="true"
      :fadeOut="!loading"
    />
    <div :class="$style.layout">

      <Header @setSearchData="searchData = $event" />
      <PokemonCardsList
        :searchData="searchData"
        @setLoading="loading=$event"
      />
    </div>
  </div>
</template>

<script>
import Header from '../components/home/Header'
import PokemonCardsList from '../components/home/PokemonCardsList'
import LoadingScreen from '../components/LoadingScreen'
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
    PokemonCardsList
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
