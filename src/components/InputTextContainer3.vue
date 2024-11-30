<template>
  <div class="input-text-container-12">
    <input class="input-text-12 m3bodylarge" name="inputtext" placeholder="Ulice" type="text" />
  </div>
</template>

<script>
export default {
  name: "InputTextContainer3",
};
</script>

<style lang="sass">
@import '../../variables'

.input-text-container-12,
.input-text-container-13,
.input-text-container-14,
.input-text-container-15
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-12,
.input-text-13,
.input-text-14,
.input-text-15
  background-color: transparent
  border: 0
  color: $eerie-black
  flex: 0 0 auto
  font-weight: 400
  line-height: 24px
  margin-top: -1.00px
  padding: 0
  position: relative
  white-space: nowrap

.input-text-12::placeholder,
.input-text-13::placeholder,
.input-text-14::placeholder,
.input-text-15::placeholder
  color: #1d1b2099
</style>
