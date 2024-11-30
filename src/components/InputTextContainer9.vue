<template>
  <div class="input-text-container-36">
    <input class="input-text-36 m3bodylarge" name="inputtext" placeholder="Poznámky" :type="inputType" />
  </div>
</template>

<script>
export default {
  name: "InputTextContainer9",
  props: ["inputType"],
};
</script>

<style lang="sass">
@import '../../variables'

.input-text-container-36,
.input-text-container-37,
.input-text-container-38,
.input-text-container-39
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-36,
.input-text-37,
.input-text-38,
.input-text-39
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

.input-text-36::placeholder,
.input-text-37::placeholder,
.input-text-38::placeholder,
.input-text-39::placeholder
  color: #1d1b2099
</style>
