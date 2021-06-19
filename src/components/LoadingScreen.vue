<template>
  <div :class="buildBackground">
    <img
      :class="$style.autowalk"
      src="../assets/autowalk.gif"
    />
  </div>
</template>

<script>
export default {
  props: {
    fadeOut: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buildBackground () {
      if (this.fadeOut) {
        return [this.$style.loadBackground, this.$style.fadeOut]
      } else {
        return this.$style.loadBackground
      }
    }
  }
}
</script>

<style lang="scss" module>
.loadBackground {
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.8);
  display: grid;
  justify-content: center;
  align-items: center;
  opacity: 1;
  position: absolute;
  z-index: 10;
}
.autowalk {
  max-width: 20rem;
  cursor: unset;
}
.fadeOut {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 1s, opacity 1s linear;
}
</style>
