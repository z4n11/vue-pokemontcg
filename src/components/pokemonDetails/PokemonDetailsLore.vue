<template>
  <div :class="$style.pokemonLoreContainer">
    <div :class="$style.pokemonLoreLayout">
      <div :class="$style.subtitle">
        Hp {{pokemonData.hp}}
      </div>
      <div
        v-if="pokemonData.abilities"
        :class="$style.subtitle"
      >
        <div
          v-for="ability in pokemonData.abilities"
          :key="ability.name"
          :class="$style.abilityContainer"
        >

          <span
            :style="defineTextColor"
            :class="[$style.typeText, $style.defaultText]"
          >({{ability.type}})</span>
          <span
            :class="[$style.typeText, $style.defaultText]"
            style="grid-area: name; padding-left: 0.5rem"
          >{{ability.name}}</span>
          <span style="grid-area: text">{{ability.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTypeColor } from '@/utils'
export default {
  props: {
    pokemonData: {
      type: Object,
      required: true
    }
  },
  computed: {
    defineTextColor () {
      const color = getTypeColor(this.pokemonData.types[0])
      return 'color:' + color
    }
  }
}
</script>

<style lang="scss" module>
.pokemonLoreContainer {
  background-color: white;
  grid-area: lore;
  border-bottom-left-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
  display: grid;
}
.subtitle {
  font-size: 2rem;
  font-style: italic;
  color: black;
}
.typeText {
  font-weight: bold;
  font-size: 2rem;
  grid-area: type;
}
.pokemonLoreLayout {
  padding: 1rem;
  display: grid;
  overflow: auto;
  grid-template-rows: 2.5rem 1fr;
}
.abilityContainer {
  display: grid;
  grid-template-areas: "type name" "text text";
  grid-template-columns: max-content 1fr;
  font-size: 1.5rem;
}
.defaultText {
  font-style: normal;
}
</style>
