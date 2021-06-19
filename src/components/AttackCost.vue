<template>
  <div :class="$style.attackContainer">
    <div
      v-for="attack in mappedAttacks"
      :key="attack.id"
      :class="$style.attackImageContainer"
      :style="sizeComputed"
    >
      <img
        :src="typeImage(attack.type)"
        :class="$style.attackTypeImage"
      />
    </div>
  </div>
</template>

<script>
import { getTypeImage } from '../utils'
export default {
  props: {
    attacksTypesArray: {
      type: Array,
      required: true
    },
    size: String
  },
  computed: {
    mappedAttacks () {
      return this.attacksTypesArray.map(attack => {
        return {
          id: this.attacksTypesArray.indexOf(attack) + Math.random(),
          type: attack
        }
      })
    },
    sizeComputed () {
      if (this.size === 'small') {
        return 'width: 2rem'
      } else if (this.size === 'medium') {
        return 'width: 4rem'
      } else {
        return 'width: 2rem'
      }
    }
  },
  methods: {
    typeImage (type) {
      const image = getTypeImage(type)
      return require('../assets/' + image)
    }
  }
}
</script>

<style lang='scss' module>
.attackContainer {
  display: flex;
}
.attackTypeImage {
  max-width: 100%;
  cursor: unset;
}
.attackImageContainer {
  padding: 0.2rem;
}
</style>
