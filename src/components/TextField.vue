<template>
  <div :class="$style.textField">
    <div :class="$style.textField1">
      <div :class="$style.stateLayer">
        <div :class="$style.content">
          <div :class="$style.inputTextContainer">
            <div :class="$style.inputText">mm/dd/yyyy</div>
            <img :class="$style.caretIcon" alt="" src="/caret.svg" />
          </div>
          <div :class="$style.labelTextContainer">
            <div :class="$style.labelText">Date</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.supportingText">
      <div :class="$style.supportingText1">Supporting text</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "TextField",
  });
</script>
<style module>
  .inputText {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 24px;
  }
  .caretIcon {
    width: 0px;
    position: relative;
    height: 16px;
    display: none;
  }
  .inputTextContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    z-index: 0;
  }
  .labelText {
    height: 16px;
    width: 27px;
    position: relative;
    letter-spacing: 0.4px;
    line-height: 16px;
    display: inline-block;
  }
  .labelTextContainer {
    margin: 0 !important;
    position: absolute;
    top: -12px;
    left: -4px;
    background-color: var(--m3-sys-light-surface-container-high);
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
    z-index: 1;
    font-size: var(--font-size-xs);
    color: var(--m3-sys-light-primary);
  }
  .content {
    flex: 1;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-9xs) 0px;
    box-sizing: border-box;
    position: relative;
  }
  .stateLayer {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px var(--padding-9xs) var(--padding-base);
  }
  .textField1 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    border: 1px solid var(--color-darkseagreen);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 0;
  }
  .supportingText1 {
    height: 16px;
    width: 150px;
    position: relative;
    letter-spacing: 0.4px;
    line-height: 16px;
    display: inline-block;
    flex-shrink: 0;
  }
  .supportingText {
    width: 100%;
    margin: 0 !important;
    position: absolute;
    right: 0px;
    bottom: -20px;
    left: 0px;
    height: 20px;
    display: none;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-base) 0px;
    box-sizing: border-box;
    z-index: 1;
    font-size: var(--font-size-xs);
    color: var(--schemes-on-surface-variant);
  }
  .textField {
    align-self: stretch;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    height: 56px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--schemes-on-surface);
    font-family: var(--m3-label-large);
  }
</style>
