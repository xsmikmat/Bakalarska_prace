<template>
  <div :class="$style.inputDatePicker">
    <div :class="$style.header">
      <div :class="$style.selectDate">Select date</div>
      <div :class="$style.weekDayDayParent">
        <h1 :class="$style.weekDayDay">Den odjezdu</h1>
        <div :class="$style.iconButton">
          <div :class="$style.container">
            <div :class="$style.stateLayer">
              <img :class="$style.icon" loading="lazy" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.date">
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
    </div>
    <div :class="$style.localActions">
      <div :class="$style.clearButton">
        <div :class="$style.stateLayer">
          <div :class="$style.labelText">Clear</div>
        </div>
      </div>
      <div :class="$style.buttonContainer">
        <div :class="$style.secondaryButton">
          <div :class="$style.stateLayer">
            <div :class="$style.labelText1">Cancel</div>
          </div>
        </div>
        <div :class="$style.secondaryButton">
          <div :class="$style.stateLayer">
            <div :class="$style.labelText2">OK</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "InputDatePicker",
  });
</script>
<style module>
  .selectDate {
    position: relative;
    letter-spacing: 0.1px;
    line-height: 20px;
    font-weight: 500;
    display: none;
  }
  .weekDayDay {
    margin: 0;
    align-self: stretch;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 40px;
    font-weight: 400;
    font-family: inherit;
    display: flex;
    align-items: center;
  }
  .icon {
    height: 24px;
    width: 24px;
    position: relative;
  }
  .stateLayer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-5xs);
  }
  .container {
    border-radius: var(--br-81xl);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .iconButton {
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .weekDayDayParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    font-size: var(--m3-headline-large-size);
    color: var(--schemes-on-surface);
  }
  .header {
    align-self: stretch;
    border-bottom: 1px solid var(--color-seagreen);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-xs) var(--padding-5xs)
      var(--padding-5xl);
    gap: var(--gap-17xl);
    color: var(--schemes-on-surface-variant);
  }
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
  }
  .date {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-lg) var(--padding-5xl) var(--padding-base);
    font-size: var(--font-size-xs);
  }
  .labelText {
    height: 20px;
    width: 34px;
    position: relative;
    letter-spacing: 0.1px;
    line-height: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .stateLayer {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-xs);
  }
  .clearButton {
    border-radius: var(--br-81xl);
    height: 40px;
    overflow: hidden;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .labelText1 {
    height: 20px;
    width: 44px;
    position: relative;
    letter-spacing: 0.1px;
    line-height: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .secondaryButton {
    border-radius: var(--br-81xl);
    height: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .labelText2 {
    height: 20px;
    width: 19px;
    position: relative;
    letter-spacing: 0.1px;
    line-height: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttonContainer {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    gap: var(--gap-5xs);
  }
  .localActions {
    width: 328px;
    display: none;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-5xs) var(--padding-xs) var(--padding-xs);
    box-sizing: border-box;
    text-align: center;
  }
  .inputDatePicker {
    width: 230px;
    border-radius: var(--br-9xl);
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    height: 194px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
    text-align: left;
    font-size: var(--m3-label-large-size);
    color: var(--m3-sys-light-primary);
    font-family: var(--m3-label-large);
  }
</style>
