<template>
  <div style="display: grid; position: relative">
    <div
      v-if="cardFilterStyle.length > 0"
      :class="cardFilterStyle"
      @click="setBlur(false)"
    >
      <eye-icon size="0.9x" />
      <span style="padding-left: 1rem">
        ver cartas relacionadas
      </span>
    </div>
    <div
      v-else
      :class="$style.cardFilterSetButton"
      @click="setBlur(true)"
    >
      <eye-off-icon size="2x" />
    </div>
    <carousel
      style="display: grid;"
      :class="cardFilterBlurStyle"
      :perPageCustom="[[1920, 4], [1366, 3]]"
    >
      <slide
        v-for="card in pokemonData.relatedCards"
        :key="card.id"
      >
        <img
          style="max-width: 80%;"
          :src="card.image"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { EyeIcon, EyeOffIcon } from 'vue-feather-icons'
export default {
  data () {
    return {
      cardFilterBlurStyle: [this.$style.cardFilterBlur],
      cardFilterStyle: [this.$style.cardFilter]
    }
  },
  components: {
    Carousel,
    Slide,
    EyeIcon,
    EyeOffIcon
  },
  props: {
    pokemonData: {
      type: Object,
      retuired: true
    }
  },
  methods: {
    setBlur (condition) {
      if (condition) {
        this.cardFilterBlurStyle = [this.$style.cardFilterBlur]
        this.cardFilterStyle = [this.$style.cardFilter]
      } else {
        this.cardFilterBlurStyle = []
        this.cardFilterStyle = []
      }
    }
  }
}
</script>

<style lang='scss' module>
.cardFilter {
  position: absolute;
  height: 100%;
  width: 100%;
  top: -1rem;
  left: -2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  font-size: 3rem;
  font-style: italic;
  text-shadow: 0.2rem 0.2rem 0.5rem black;
  color: white;
  &:hover {
    cursor: pointer;
  }
}
.cardFilterBlur {
  filter: blur(1rem) grayscale(1);
}
.cardFilterSetButton {
  position: absolute;
  z-index: 2;
  top: -25px;
  right: 30px;
  color: white;
  &:hover {
    cursor: pointer;
  }
}
</style>
