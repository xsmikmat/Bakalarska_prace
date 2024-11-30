<template>
  <button class="component-1-variant6" @click="SubmitForm('form1')">
    Potvrdit
  </button>
</template>

<script>
export default {
  name: "Component1Variant6",
  props: ["potvrditRezervaci", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-1-variant6
  align-items: center
  background-color: $fun-green
  border: 0
  color: white
  font-weight: bold
  border-radius: 10px
  cursor: pointer
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  height: 40px
  justify-content: center
  overflow: hidden
  padding: 20px
  position: relative

.potvrdit-rezervaci
  letter-spacing: 0
  line-height: normal
  margin-top: -0.50px
  position: relative
  white-space: nowrap
  width: fit-content

.component-1-variant6.component-1-variant6-1,
.component-1-variant6.component-1-variant6-2,
.component-1-variant6.component-1-variant6-3,
.component-1-variant6.component-1-variant6-4,
.component-1-variant6.component-1-variant6-5,
.component-1-variant6.component-1-variant6-7
  flex: unset

.component-1-variant6.component-1-variant6-6
  margin-bottom: -15.00px
</style>
