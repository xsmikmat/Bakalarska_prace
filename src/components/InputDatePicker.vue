<template>
  <div class="input-date-picker">
    <x-header3 />
    <date />
  </div>
</template>

<script>
import XHeader3 from "./XHeader3";
import Date from "./Date";
export default {
  name: "InputDatePicker",
  components: {
    XHeader3,
    Date,
  },
};
</script>

<style lang="sass">
@import '../../variables'

.input-date-picker
  align-items: center
  background-color: $white
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $fun-green
  border-radius: 28px
  display: flex
  flex-direction: column
  overflow: hidden
  position: relative
  width: 230px
</style>
