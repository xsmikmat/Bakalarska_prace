<template>
  <div class="text-field-5">
    <div class="text-field-7">
      <div class="state-layer-3">
        <div class="content-3">
          <div class="input-text-container-3">
            <input
              class="input-text-3 m3bodylarge"
              name="inputtext"
              :placeholder="inputPlaceholder"
              :type="inputType"
              required
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextField2",
  props: ["inputType", "inputPlaceholder"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-5
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  height: 56px
  position: relative
  width: 100%

.text-field-7
  align-items: flex-start
  align-self: stretch
  border: 3px solid
  border-color: $surf
  border-radius: 4px
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 10px
  position: relative
  width: 100%

.state-layer-3
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-3
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  height: 48px
  justify-content: center
  padding: 4px 0px
  position: relative

.input-text-container-3
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-3
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

.input-text-3::placeholder
  color: #1d1b2099
</style>
