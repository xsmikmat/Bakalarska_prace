<template>
  <div class="input-text-container-8">
    <input class="input-text-8 m3bodylarge" name="inputtext" placeholder="Příjmení" type="text" required />
  </div>
</template>

<script>
export default {
  name: "InputTextContainer2",
};
</script>

<style lang="sass">
@import '../../variables'

.input-text-container-8,
.input-text-container-9,
.input-text-container-10,
.input-text-container-11
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-8,
.input-text-9,
.input-text-10,
.input-text-11
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

.input-text-8::placeholder,
.input-text-9::placeholder,
.input-text-10::placeholder,
.input-text-11::placeholder
  color: #1d1b2099
</style>
