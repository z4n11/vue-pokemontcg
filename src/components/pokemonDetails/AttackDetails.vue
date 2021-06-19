<template>
  <div :class="$style.attackContainer">
    <AttackCost
      :attacksTypesArray="attackData.cost"
      size="medium"
    />
    <div>
      <span
        :class="$style.title"
        style="padding-left: 1rem"
      >{{attackData.name}}</span>
    </div>
    <div>
      <div style="display: flex;">
        <div
          :class="$style.damageText"
          style="display: grid;"
        >
          <span style="text-align: end;">dano </span>
          <span> causado </span>
        </div>
        <span :class="$style.damageLabel">{{attackData.damage}}</span>
      </div>
    </div>
    <div
      :class="$style.attackDescription"
      style="grid-area: text; font-size: 3rem;"
    >
      <span>{{attackData.text}}</span>
    </div>
  </div>
</template>

<script>
import AttackCost from '../AttackCost.vue'
export default {
  props: {
    attackData: {
      type: Object,
      required: true
    }
  },
  components: {
    AttackCost
  }
}
</script>

<style lang='scss' module>
.attackContainer {
  display: grid;
  grid-template-areas: "cost name damage" "text text text";
  grid-template-columns: min-content 1fr 10rem;
  padding: 1rem;
  align-items: center;
}
.title {
  font-size: 3rem;
  font-weight: bolder;
}
.damageLabel {
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
}
.damageText {
  display: grid;
  height: 1rem;
  font-size: 1rem;
  padding-right: 1rem;
  font-weight: 700;
  justify-content: flex-end;
  padding-top: 0.5rem;
}
.attackDescription {
  font-size: 3rem;
  align-self: flex-start;
  display: grid;
  padding: 0.5rem;
}
</style>
