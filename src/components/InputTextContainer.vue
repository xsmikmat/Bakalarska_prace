<template>
  <div class="input-text-container-4">
    <input class="input-text-4 m3bodylarge" name="inputtext" placeholder="Jméno" type="text" required />
  </div>
</template>

<script>
export default {
  name: "InputTextContainer",
};
</script>

<style lang="sass">
@import '../../variables'

.input-text-container-4,
.input-text-container-5,
.input-text-container-6,
.input-text-container-7
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-4,
.input-text-5,
.input-text-6,
.input-text-7
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

.input-text-4::placeholder,
.input-text-5::placeholder,
.input-text-6::placeholder,
.input-text-7::placeholder
  color: #1d1b2099
</style>
