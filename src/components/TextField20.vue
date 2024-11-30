<template>
  <div :class="[`text-field-81`, className || ``]">
    <div class="text-field-80">
      <div class="state-layer-43">
        <div class="content-40">
          <div class="input-text-container-40">
            <input class="input-text-40 m3bodylarge" name="inputtext" placeholder="Jméno" type="text" required />
          </div>
        </div>
        <icon-button :className="iconButtonProps.className" />
      </div>
    </div>
    <img
      class="active-indicator-36"
      src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673db85e76e2d7568d4b007c/img/active-indicator-78.svg"
      alt="Active indicator"
    />
    <supporting-text3 />
  </div>
</template>

<script>
import IconButton from "./IconButton";
import SupportingText3 from "./SupportingText3";
export default {
  name: "TextField20",
  components: {
    IconButton,
    SupportingText3,
  },
  props: ["className", "iconButtonProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-81
  align-items: flex-start
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $fun-green
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  height: 49px
  margin-top: -1.00px
  position: relative
  width: 497px

.text-field-80
  align-items: flex-start
  align-self: stretch
  background-color: $white
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 10px
  position: relative
  width: 100%

.state-layer-43
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-40
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  height: 48px
  justify-content: center
  margin-bottom: -9.00px
  padding: 4px 0px
  position: relative

.input-text-container-40
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  position: relative

.input-text-40
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

.input-text-40::placeholder
  color: #1d1b2099

.active-indicator-36
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%

.text-field-81.text-field-82
  margin-top: unset
</style>
