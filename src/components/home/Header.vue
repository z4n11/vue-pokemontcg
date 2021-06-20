<template>
  <div :class="$style.layout">
    <div :class="$style.logoDivArea" />
    <div :class="$style.searchbarArea">
      <Searchbar @setSearchData="$emit('setSearchData', $event)" />
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import Searchbar from './../Searchbar.vue'
export default {
  components: {
    Searchbar
  }
}
</script>

<style lang="scss" module>
.layout {
  display: grid;
  grid-template-areas: "logo searchbar socialMidias";
  grid-template-columns: 25% 1fr 25%;
  grid-template-rows: 10rem;
  animation: changeColor 20s infinite;
}
.searchbarArea {
  display: grid;
  justify-content: center;
}

@keyframes changeColor {
  0% {
    background: #ee8130;
  }
  25% {
    background: crimson;
  }
  50% {
    background: #6390f0;
  }
  75% {
    background: #7ac74c;
  }
  100% {
    background: #ee8130;
  }
}
.logoDivArea {
  background-image: url(/img/sleeping.31651dd8.gif);
  background-size: 10vw;
  background-repeat: no-repeat;
  background-position: center;
  @include device("mobile") {
    background-size: 20vw;
  }
}
</style>
