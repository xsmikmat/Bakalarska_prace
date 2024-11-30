<template>
  <div class="input-text-container-24">
    <input class="input-text-24 m3bodylarge" name="inputtext" placeholder="Email" type="email" required />
  </div>
</template>

<script>
export default {
  name: "InputTextContainer6",
};
</script>

<style lang="sass">
@import '../../variables'

.input-text-container-24,
.input-text-container-25,
.input-text-container-26,
.input-text-container-27
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-24,
.input-text-25,
.input-text-26,
.input-text-27
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

.input-text-24::placeholder,
.input-text-25::placeholder,
.input-text-26::placeholder,
.input-text-27::placeholder
  color: #1d1b2099
</style>
