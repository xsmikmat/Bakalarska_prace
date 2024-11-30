<template>
  <div class="input-text-container-16">
    <input class="input-text-16 m3bodylarge" name="inputtext" placeholder="Číslo popisné" type="text" required />
  </div>
</template>

<script>
export default {
  name: "InputTextContainer4",
};
</script>

<style lang="sass">
@import '../../variables'

.input-text-container-16,
.input-text-container-17,
.input-text-container-18,
.input-text-container-19
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-16,
.input-text-17,
.input-text-18,
.input-text-19
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

.input-text-16::placeholder,
.input-text-17::placeholder,
.input-text-18::placeholder,
.input-text-19::placeholder
  color: #1d1b2099
</style>
