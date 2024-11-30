<template>
  <div class="date"><text-field /></div>
</template>

<script>
import TextField from "./TextField";
export default {
  name: "Date",
  components: {
    TextField,
  },
};
</script>

<style lang="sass">
.date,
.date-1,
.date-2
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
