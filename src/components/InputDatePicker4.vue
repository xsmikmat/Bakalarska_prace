<template>
  <div class="input-date-picker-4">
    <x-header4 />
    <div class="date-4"><text-field :className="textFieldProps.className" /></div>
  </div>
</template>

<script>
import XHeader4 from "./XHeader4";
import TextField from "./TextField";
export default {
  name: "InputDatePicker4",
  components: {
    XHeader4,
    TextField,
  },
  props: ["textFieldProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.input-date-picker-4,
.input-date-picker-5
  align-items: flex-start
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

.date-4,
.date-5
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 10px
  padding: 18px 24px 16px
  position: relative
  width: 100%
</style>
