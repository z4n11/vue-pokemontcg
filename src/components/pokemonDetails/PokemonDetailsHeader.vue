<template>
  <div :class="[$style.headerContainer, $style.title]">
    <div style="grid-area: pokeName">
      <span>{{pokemonData.name}}</span>
      <span :class="[$style.font_xs, $style.centerFlex]">{{pokemonData.id}}</span>
    </div>
    <div style="grid-area: type; align-self: center;">
      <span :class="$style.subtitle">{{$tc('type', pokemonData.types.length)}}</span>
      <div :class="$style.centerFlex">
        <TypeTag
          v-for="type in pokemonData.types"
          :key="type"
          :content="type"
        />
      </div>
    </div>
    <div style="grid-area: strong">
      <span :class="$style.subtitle">{{$tc('resistances', resistancesLength)}}</span>
      <span
        v-if="!pokemonData.resistances"
        :class="[$style.centerFlex, $style.font_xs]"
        style="height: 2.5rem"
      >{{$t('noResistances')}}</span>
      <div
        :class="$style.centerFlex"
        v-else
      >
        <div
          v-for="resitence in pokemonData.resistances"
          :key="resitence.type"
          :class="[$style.centerFlex, $style.font_xs]"
        >
          ( {{resitence.value}}
          <TypeTag :content="resitence.type" /> )
        </div>
      </div>
    </div>
    <div style="grid-area: weaknesses">
      <span :class="$style.subtitle">{{$tc('weaknesses', weaknessesLength)}}</span>
      <span
        v-if="!pokemonData.weaknesses"
        :class="[$style.centerFlex, $style.font_xs]"
        style="height: 2.5rem"
      >{{$t('noWeaknesses')}}</span>
      <div
        :class="$style.centerFlex"
        v-else
      >
        <div
          v-for="weaknesses in pokemonData.weaknesses"
          :key="weaknesses.type"
          :class="[$style.centerFlex, $style.font_xs]"
        >
          ( {{weaknesses.value}}
          <TypeTag :content="weaknesses.type" /> )
        </div>
      </div>
    </div>
    <PokemonDetailsLore :pokemonData="pokemonData" />
  </div>
</template>

<script>
import TypeTag from '../TypeTag'
import PokemonDetailsLore from './PokemonDetailsLore.vue'
export default {
  props: {
    pokemonData: {
      type: Object,
      required: true
    }
  },
  components: {
    TypeTag,
    PokemonDetailsLore
  },
  computed: {
    weaknessesLength () {
      return this.pokemonData.weaknesses ? this.pokemonData.weaknesses.length : 0
    },
    resistancesLength () {
      return this.pokemonData.resistances ? this.pokemonData.resistances.length : 0
    }
  }
}
</script>
<style lang="scss" module>
.headerContainer {
  display: grid;
  grid-template-areas:
    "pokeName type lore"
    "strong weaknesses lore";
  grid-template-rows: min-content 1fr;
  grid-template-columns: 25% 25% 1fr;
  overflow: hidden;
  @include device("mobile") {
    grid-template-areas:
      "pokeName type"
      "strong weaknesses"
      "lore lore";
    grid-template-columns: unset;
    grid-template-rows: min-content 1fr 1fr;
  }
}
.title {
  font-size: 3rem;
  color: white;
}
.centerGrid {
  display: grid;
  justify-content: center;
}
.centerFlex {
  display: flex;
  align-items: center;
}
.subtitle {
  font-size: 2rem;
  font-style: italic;
}
.font_xs {
  font-size: 1.2rem;
}
</style>
