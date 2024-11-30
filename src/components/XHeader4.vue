<template>
  <div class="header-11">
    <div class="frame-2608512-1">
      <h1 class="week-day-day-1 valign-text-middle m3headlinelarge">Den odjezdu</h1>
      <icon-button />
    </div>
  </div>
</template>

<script>
import IconButton from "./IconButton";
export default {
  name: "XHeader4",
  components: {
    IconButton,
  },
};
</script>

<style lang="sass">
@import '../../variables'

.header-11,
.header-12
  align-items: flex-start
  align-self: stretch
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $fun-green
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 36px
  padding: 16px 12px 8px 24px
  position: relative
  width: 100%

.frame-2608512-1,
.frame-2608512-2
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 8px
  position: relative
  width: 100%

.week-day-day-1,
.week-day-day-2
  align-self: stretch
  color: $eerie-black
  flex: 1
  font-weight: 400
  line-height: 40px
  margin-top: -1.00px
  position: relative
</style>
