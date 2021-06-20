<template>
  <div :class="$style.attackContainer">
    <div
      v-for="attack in pokemonData.attacks"
      :key="attack.name"
      :class="$style.attackDivLayout"
      @click="attackModalVisible = true, modalContent = attack"
    >
      <div style="grid-area: cost">
        <AttackCost :attacksTypesArray="attack.cost" />
      </div>
      <div
        style="grid-area: name"
        :class="$style.title"
      >
        {{attack.name}}
      </div>
      <div
        style="grid-area: damage"
        :class="$style.title"
      >
        <span
          v-if="attack.damage"
          :class="$style.font_xs"
        >{{$t('damage')}}</span> {{attack.damage}}
      </div>
      <div
        style="grid-area: text"
        :class="[$style.title, $style.overflow]"
      >
        {{attack.text}}
      </div>
    </div>
    <Modal
      v-model="attackModalVisible"
      :width="isMobile ? '90vw' : '40vw'"
      height="20vh"
    >
      <AttackDetails :attackData="modalContent" />
    </Modal>

  </div>
</template>

<script>
import Modal from '../Modal.vue'
import AttackCost from '../AttackCost.vue'
import AttackDetails from './AttackDetails'
export default {
  data () {
    return {
      attackModalVisible: false,
      modalContent: {}
    }
  },
  components: {
    AttackCost,
    Modal,
    AttackDetails
  },
  props: {
    pokemonData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.attackContainer {
  display: flex;
  @include device("mobile") {
    display: grid;
    justify-content: center;
    margin-bottom: 5rem;
  }
}
.attackDivLayout {
  height: 10rem;
  width: 40rem;
  border: 0.1rem solid white;
  border-radius: 2rem;
  margin-top: 3rem !important;
  margin: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-areas: "cost name damage" "text text text";
  grid-template-columns: min-content 1fr 9rem;
  grid-template-rows: 3rem 1fr;
  box-shadow: 0.5rem 1em 2rem;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0.5rem 1em 4rem;
    background-color: rgb(73, 73, 73);
    top: -4px;
  }
}
.title {
  padding: 0.4rem;
  color: white;
  font-size: 1.4rem;
}
.font_xs {
  font-size: 1.2rem;
}
.overflow {
  display: grid;
  overflow: auto;
}
</style>
