import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonCards: [],
    selectedPokemon: null
  },
  mutations: {
    setPokemonCards: (state, pokemonCards) => {
      state.pokemonCards = pokemonCards
    },
    setSelectedPokemon: (state, pokemon) => {
      state.selectedPokemon = pokemon
    }
  },
  actions: {
  },
  modules: {
  }
})
