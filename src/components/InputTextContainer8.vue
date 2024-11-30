<template>
  <div class="input-text-container-32">
    <input class="input-text-32 m3bodylarge" name="inputtext" placeholder="PSČ" type="email" required />
  </div>
</template>

<script>
export default {
  name: "InputTextContainer8",
};
</script>

<style lang="sass">
@import '../../variables'

.input-text-container-32,
.input-text-container-33,
.input-text-container-34,
.input-text-container-35
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-32,
.input-text-33,
.input-text-34,
.input-text-35
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

.input-text-32::placeholder,
.input-text-33::placeholder,
.input-text-34::placeholder,
.input-text-35::placeholder
  color: #1d1b2099
</style>
