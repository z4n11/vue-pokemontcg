import axios from 'axios'

async function getPokemonCards () {
  const response = await axios.get('https://api.pokemontcg.io/v2/cards', {
    headers: {
      'X-api-key': '7a8f1fde-242e-4d5e-b60b-1bae68b3bb20'
    }
  })
  return response.data
}

async function getSpecificPokemonCard (pokemonId) {
  const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=id:${pokemonId}`, {
    headers: {
      'X-api-key': '7a8f1fde-242e-4d5e-b60b-1bae68b3bb20'
    }
  })
  return response.data
}

async function getRelatedPokemonCard (pokemonName) {
  const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`, {
    headers: {
      'X-api-key': '7a8f1fde-242e-4d5e-b60b-1bae68b3bb20'
    }
  })
  return response.data
}

export {
  getPokemonCards,
  getSpecificPokemonCard,
  getRelatedPokemonCard
}
