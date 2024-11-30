<template>
  <div class="state-layer-2">
    <div class="content-2">
      <div class="input-text-container-2">
        <div class="input-text-2 valign-text-middle m3bodylarge">mm/dd/yyyy</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StateLayer",
};
</script>

<style lang="sass">
@import '../../variables'

.state-layer-2,
.state-layer,
.state-layer-1
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-2,
.content,
.content-1
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  height: 48px
  justify-content: center
  padding: 4px 0px
  position: relative

.input-text-container-2,
.input-text-container,
.input-text-container-1
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-2,
.input-text,
.input-text-1
  color: $eerie-black
  font-weight: 400
  line-height: 24px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content
</style>
