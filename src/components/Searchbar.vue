<template>
  <div :class="$style.layout">
    <input
      :style="'width: '+ width"
      :class="$style.input"
      v-model="searchData"
      type="text"
      placeholder="Procure um pokémon!"
    >
    <search-icon
      size="1.5x"
      :class="$style.searchIcon"
    />
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'
export default {
  data () {
    return {
      searchData: ''
    }
  },
  components: {
    SearchIcon
  },
  props: {
    width: {
      type: String,
      default: '20rem'
    }
  },
  watch: {
    searchData: function () {
      this.$emit('setSearchData', this.searchData)
    }
  }
}
</script>

<style lang='scss' module>
.layout {
  align-items: center;
  display: flex;
  padding-top: 0.2rem;
}
.searchIcon {
  padding: 0.2rem;
  padding-right: 0.8rem;
  border-bottom: 0.1rem solid white !important;
  border: none;
  align-items: center;
  max-height: 1.7rem;
  color: white;
}
.input {
  padding-left: 1rem;
  padding-top: 0.4rem;
  border-bottom: 0.1rem solid white !important;
  border: none;
  -webkit-text-fill-color: white;
  font-size: 1.2rem;
  font-weight: inherit !important;
  font-style: italic;
  outline: none !important;
  background: transparent;
}
::placeholder {
  filter: opacity(0.5);
}
</style>
