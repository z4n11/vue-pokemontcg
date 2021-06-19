<template>
  <div
    :class="$style.tagContainer"
    :style="'background-color:'+ colorComputed"
  >
    <span style="margin: 0.5rem">{{content}}</span>
  </div>
</template>

<script>
import { getTypeColor } from '../utils'
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    colorComputed () {
      return getTypeColor(this.content)
    }
  }
}
</script>

<style lang="scss" module>
.tagContainer {
  color: white;
  border: 0.1rem solid;
  border-radius: 1rem;
  width: min-content;
  height: 1.5rem;
  display: grid;
  align-content: center !important;
  box-shadow: 0.1rem 0.1rem 0.1rem 0 grey;
  font-size: 1.2rem;
  margin: 0.5rem;
}
</style>
