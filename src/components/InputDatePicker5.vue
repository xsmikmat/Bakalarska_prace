<template>
  <div class="input-date-picker-2">
    <x-header4 />
    <date />
  </div>
</template>

<script>
import XHeader4 from "./XHeader4";
import Date from "./Date";
export default {
  name: "InputDatePicker5",
  components: {
    XHeader4,
    Date,
  },
};
</script>

<style lang="sass">
@import '../../variables'

.input-date-picker-2,
.input-date-picker-3
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
