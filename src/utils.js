function getTypeColor (pokemonType) {
  const typeColors = [
    { type: 'normal', color: '#A8A77A' },
    { type: 'fire', color: '#EE8130' },
    { type: 'water', color: '#6390F0' },
    { type: 'lightning', color: '#F7D02C' },
    { type: 'grass', color: '#7AC74C' },
    { type: 'ice', color: '#96D9D6' },
    { type: 'fighting', color: '#C22E28' },
    { type: 'poison', color: '#A33EA1' },
    { type: 'ground', color: '#E2BF65' },
    { type: 'flying', color: '#A98FF3' },
    { type: 'psychic', color: '#F95587' },
    { type: 'bug', color: '#A6B91A' },
    { type: 'rock', color: '#B6A136' },
    { type: 'ghost', color: '#735797' },
    { type: 'dragon', color: '#6F35FC' },
    { type: 'darkness', color: '#705746' },
    { type: 'metal', color: '#B7B7CE' },
    { type: 'fairy', color: '#D685AD' },
    { type: 'colorless', color: '#E8D5ED' },
    { type: 'null', color: 'white' }
  ]
  const pokeTypeData = typeColors.find(pokeType => pokeType.type === pokemonType.toLowerCase())
  return pokeTypeData.color ? pokeTypeData.color : 'white'
}

function getTypeImage (pokemonType) {
  const image = `attackIcons/${pokemonType.toLowerCase()}.png`
  return image
}

function unitTestPokemonData (pokemonType) {
  const pokemonData = {
    pokemonData: {
      id: 'ex3-1',
      name: 'Absol',
      supertype: 'Pokémon',
      subtypes: ['Basic'],
      hp: '70',
      types: ['Darkness'],
      attacks: [{
        name: 'Bad News',
        cost: ['Darkness'],
        convertedEnergyCost: 1,
        damage: '',
        text: 'If the number of cards in your opponents hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left.Have your opponent discard the cards you chose.'
      },
      {
        name: 'Prize Count',
        cost: ['Darkness', 'Colorless'],
        convertedEnergyCost: 2,
        damage: '20 + ',
        text: 'If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage.'
      }],
      weaknesses: [{
        type: 'Fighting',
        value: '×2'
      }],
      resistances: [{
        type: 'Psychic',
        value: '-30'
      }],
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      set: {
        id: 'ex3',
        name: 'Dragon',
        series: 'EX',
        printedTotal: 97,
        total: 97,
        legalities: { unlimited: 'Legal' },
        ptcgoCode: 'DR',
        releaseDate: '2003 / 09 / 18',
        updatedAt: '2019 / 01 / 28 16: 44: 00',
        images: {
          symbol: 'https://images.pokemontcg.io/ex3/symbol.png',
          logo: 'https://images.pokemontcg.io/ex3/logo.png'
        }
      },
      number: '1',
      artist: 'Naoyo Kimura',
      rarity: 'Rare Holo',
      nationalPokedexNumbers: [359],
      legalities: { unlimited: 'Legal' },
      images: {
        small: 'https://images.pokemontcg.io/ex3/1.png',
        large: 'https://images.pokemontcg.io/ex3/1_hires.png'
      },
      tcgplayer: {
        url: 'https://prices.pokemontcg.io/tcgplayer/ex3-1',
        updatedAt: '2021/06/18',
        prices: {
          holofoil: {
            low: 22.98,
            mid: 36.07,
            high: 55.78,
            market: 50.24,
            directLow: null
          },
          reverseHolofoil: {
            low: 23.99,
            mid: 30,
            high: 39.49,
            market: 24.96,
            directLow: null
          }
        }
      }
    }
  }
  return pokemonData
}

export {
  getTypeColor,
  getTypeImage,
  unitTestPokemonData
}
