<template>
  <div class="input-text-container-20">
    <input class="input-text-20 m3bodylarge" name="inputtext" placeholder="Město" type="text" required />
  </div>
</template>

<script>
export default {
  name: "InputTextContainer5",
};
</script>

<style lang="sass">
@import '../../variables'

.input-text-container-20,
.input-text-container-21,
.input-text-container-22,
.input-text-container-23
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-20,
.input-text-21,
.input-text-22,
.input-text-23
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

.input-text-20::placeholder,
.input-text-21::placeholder,
.input-text-22::placeholder,
.input-text-23::placeholder
  color: #1d1b2099
</style>
