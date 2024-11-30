<template>
  <div class="input-date-picker-1">
    <x-header3 />
    <div class="date-3">
      <text-field2 :inputType="textField2Props.inputType" :inputPlaceholder="textField2Props.inputPlaceholder" />
    </div>
  </div>
</template>

<script>
import XHeader3 from "./XHeader3";
import TextField2 from "./TextField2";
export default {
  name: "InputDatePicker2",
  components: {
    XHeader3,
    TextField2,
  },
  props: ["textField2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.input-date-picker-1
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

.date-3
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
