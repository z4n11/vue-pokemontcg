<template>
  <div
    :class="buildBackground"
    @click="$emit('input', false)"
  >
    <div
      :class="$style.modalContainer"
      :style="modalSizes"
      @click.stop
    >
      <slot v-if="value" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    width: {
      type: String,
      default: '50vw'
    },
    height: {
      type: String,
      default: '50vh'
    }
  },
  computed: {
    buildBackground () {
      if (!this.value) {
        return [this.$style.modalBackground, this.$style.fadeOut]
      } else {
        return [this.$style.modalBackground, this.$style.fadeIn]
      }
    },
    modalSizes () {
      return `width: ${this.width}; height: ${this.height}`
    }
  }
}
</script>

<style lang='scss' module>
.modalBackground {
  display: grid;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100vw;
  z-index: 9998;
}
.modalContainer {
  background-color: white;
  border-radius: 2rem;
  position: relative;
  z-index: 9999;
  padding: 1rem;
  box-shadow: 1rem 1rem 1rem;
  overflow: hidden;
}
.fadeIn {
  visibility: visible;
  opacity: 1;
  transition: visibility 0.5s 0s, opacity 0.2s linear;
}
.fadeOut {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.2s, opacity 0.2s linear;
}
</style>
