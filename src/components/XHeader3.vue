<template>
  <div class="header-9">
    <div class="frame-2608512"><div class="week-day-day valign-text-middle text">Den odjezdu</div></div>
  </div>
</template>

<script>
export default {
  name: "XHeader3",
};
</script>

<style lang="sass">
@import '../../variables'

.header-9
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

.frame-2608512
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 8px
  position: relative
  width: 100%

.week-day-day
  align-self: stretch
  color: $eerie-black
  flex: 1
  font-weight: 400
  line-height: 15px
  margin-top: -1.00px
  position: relative
  text-align: center
  white-space: nowrap
</style>
