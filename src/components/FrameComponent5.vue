<template>
  <div :class="$style.frameParent">
    <div :class="$style.inputDatePickerParent">
      <InputDatePicker
        type="Single input"
        headline="Den odjezdu"
        :showClearButton="false"
        supportingText="Select date"
        :showContainer="true"
        :showSupportingText="false"
      /><InputDatePicker
        type="Single input"
        headline="Den odjezdu"
        :showClearButton="false"
        supportingText="Select date"
        :showContainer="true"
        :showSupportingText="false"
      />
    </div>
    <div :class="$style.textField">
      <div :class="$style.textField1">
        <div :class="$style.stateLayer">
          <div :class="$style.content">
            <div :class="$style.labelTextContainer">
              <div :class="$style.labelText">Label</div>
            </div>
            <div :class="$style.inputTextContainer">
              <div :class="$style.inputText">Jméno</div>
            </div>
          </div>
          <IconButton
            state="Enabled"
            style="Standard"
            :showContainer="false"
            icon="/icon-2.svg"
          />
        </div>
      </div>
      <div :class="$style.activeIndicator" />
      <div :class="$style.supportingText">
        <div :class="$style.supportContent">
          <ul :class="$style.povinnPole">
            <li>Povinné pole</li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="$style.textField2">
      <div :class="$style.textField1">
        <div :class="$style.stateLayer">
          <div :class="$style.content">
            <div :class="$style.labelTextContainer">
              <div :class="$style.labelText">Label</div>
            </div>
            <div :class="$style.inputTextContainer">
              <div :class="$style.inputText">Příjmení</div>
            </div>
          </div>
          <IconButton
            state="Enabled"
            style="Standard"
            :showContainer="false"
            icon="/icon-2.svg"
          />
        </div>
      </div>
      <div :class="$style.activeIndicator" />
      <div :class="$style.supportingText">
        <div :class="$style.supportContent">
          <ul :class="$style.povinnPole">
            <li>Povinné pole</li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="$style.textField4">
      <div :class="$style.textField1">
        <div :class="$style.stateLayer">
          <div :class="$style.content">
            <div :class="$style.labelTextContainer">
              <div :class="$style.labelText">Label</div>
            </div>
            <div :class="$style.inputTextContainer">
              <div :class="$style.inputText">Ulice</div>
            </div>
          </div>
          <IconButton
            state="Enabled"
            style="Standard"
            :showContainer="false"
            icon="/icon-2.svg"
          />
        </div>
      </div>
      <div :class="$style.activeIndicator" />
      <div :class="$style.supportingText">
        <div :class="$style.supportContent">
          <ul :class="$style.povinnPole">
            <li>Povinné pole</li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="$style.textField6">
      <div :class="$style.textField1">
        <div :class="$style.stateLayer">
          <div :class="$style.content">
            <div :class="$style.labelTextContainer">
              <div :class="$style.labelText">Label</div>
            </div>
            <div :class="$style.inputTextContainer">
              <div :class="$style.inputText">Číslo popisné</div>
            </div>
          </div>
          <IconButton
            state="Enabled"
            style="Standard"
            :showContainer="false"
            icon="/icon-2.svg"
          />
        </div>
      </div>
      <div :class="$style.activeIndicator" />
      <div :class="$style.supportingText">
        <div :class="$style.supportContent">
          <ul :class="$style.povinnPole">
            <li>Povinné pole</li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="$style.textField8">
      <div :class="$style.textField1">
        <div :class="$style.stateLayer">
          <div :class="$style.content">
            <div :class="$style.labelTextContainer">
              <div :class="$style.labelText">Label</div>
            </div>
            <div :class="$style.inputTextContainer">
              <div :class="$style.inputText">Město</div>
            </div>
          </div>
          <IconButton
            state="Enabled"
            style="Standard"
            :showContainer="false"
            icon="/icon-2.svg"
          />
        </div>
      </div>
      <div :class="$style.activeIndicator" />
      <div :class="$style.supportingText">
        <div :class="$style.supportContent">
          <ul :class="$style.povinnPole">
            <li>Povinné pole</li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="$style.textField10">
      <div :class="$style.textField1">
        <div :class="$style.stateLayer">
          <div :class="$style.content">
            <div :class="$style.labelTextContainer">
              <div :class="$style.labelText">Label</div>
            </div>
            <div :class="$style.inputTextContainer">
              <div :class="$style.inputText">PSČ</div>
            </div>
          </div>
          <IconButton
            state="Enabled"
            style="Standard"
            :showContainer="false"
            icon="/icon-2.svg"
          />
        </div>
      </div>
      <div :class="$style.activeIndicator" />
      <div :class="$style.supportingText">
        <div :class="$style.supportContent">
          <ul :class="$style.povinnPole">
            <li>Povinné pole</li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="$style.textField12">
      <div :class="$style.textField1">
        <div :class="$style.stateLayer">
          <div :class="$style.content">
            <div :class="$style.labelTextContainer">
              <div :class="$style.labelText">Label</div>
            </div>
            <div :class="$style.inputTextContainer">
              <div :class="$style.inputText">Telefon</div>
            </div>
          </div>
          <IconButton
            state="Enabled"
            style="Standard"
            :showContainer="false"
            icon="/icon-2.svg"
          />
        </div>
      </div>
      <div :class="$style.activeIndicator" />
      <div :class="$style.supportingText">
        <div :class="$style.supportContent">
          <ul :class="$style.povinnPole">
            <li>Povinné pole</li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="$style.frameGroup">
      <div :class="$style.textFieldParent">
        <div :class="$style.textField">
          <div :class="$style.textField1">
            <div :class="$style.stateLayer">
              <div :class="$style.content">
                <div :class="$style.labelTextContainer">
                  <div :class="$style.labelText">Label</div>
                </div>
                <div :class="$style.inputTextContainer">
                  <div :class="$style.inputText">Email</div>
                </div>
              </div>
              <IconButton
                state="Enabled"
                style="Standard"
                :showContainer="false"
                icon="/icon-2.svg"
              />
            </div>
          </div>
          <div :class="$style.activeIndicator" />
          <div :class="$style.supportingText">
            <div :class="$style.supportContent">
              <ul :class="$style.povinnPole">
                <li>Povinné pole</li>
              </ul>
            </div>
          </div>
        </div>
        <div :class="$style.textField">
          <div :class="$style.textField17">
            <div :class="$style.stateLayer">
              <div :class="$style.content">
                <div :class="$style.labelTextContainer">
                  <div :class="$style.labelText">Label</div>
                </div>
                <div :class="$style.inputTextContainer">
                  <div :class="$style.inputText">Poznámky</div>
                </div>
              </div>
              <IconButton
                state="Enabled"
                style="Standard"
                :showContainer="false"
                icon="/icon-2.svg"
              />
            </div>
          </div>
          <div :class="$style.activeIndicator" />
          <div :class="$style.supportingText14">
            <div :class="$style.supportingText15">
              <ul :class="$style.povinnPole">
                <li>Povinné pole</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.component1variant6Wrapper">
        <Component1Variant potvrditRezervaci="Potvrdit rezervaci" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import InputDatePicker from "./InputDatePicker.vue";
  import IconButton from "./IconButton.vue";
  import Component1Variant from "./Component1Variant.vue";

  export default defineComponent({
    name: "FrameComponent5",
    components: { InputDatePicker, IconButton, Component1Variant },
  });
</script>
<style module>
  .inputDatePickerParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .labelText {
    height: 16px;
    width: 31px;
    position: relative;
    letter-spacing: 0.4px;
    line-height: 16px;
    display: inline-block;
  }
  .labelTextContainer {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .inputText {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 24px;
  }
  .inputTextContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: var(--font-size-base);
    color: var(--schemes-on-surface);
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
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 0;
  }
  .activeIndicator {
    align-self: stretch;
    position: relative;
    border-top: 1px solid var(--schemes-on-surface-variant);
    box-sizing: border-box;
    height: 1px;
    z-index: 1;
  }
  .povinnPole {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-base);
  }
  .supportContent {
    flex: 1;
    position: relative;
    letter-spacing: 0.4px;
    line-height: 16px;
  }
  .supportingText {
    width: 100%;
    height: 20px;
    margin: 0 !important;
    position: absolute;
    right: 0px;
    bottom: -20px;
    left: 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-base) 0px;
    box-sizing: border-box;
    z-index: 2;
  }
  .textField {
    width: 495px;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    border-bottom: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    height: 47.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .textField2 {
    width: 495px;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    border-bottom: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    height: 47.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 4;
  }
  .textField4 {
    width: 495px;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    border-bottom: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    height: 47.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 8;
  }
  .textField6 {
    width: 495px;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    border-bottom: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    height: 47.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 9;
  }
  .textField8 {
    width: 495px;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    border-bottom: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    height: 48.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 7;
  }
  .textField10 {
    width: 495px;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    border-bottom: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    height: 47.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 6;
  }
  .textField12 {
    width: 495px;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    border-bottom: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    height: 47.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 5;
  }
  .textField17 {
    align-self: stretch;
    border-radius: var(--br-9xs) var(--br-9xs) 0px 0px;
    background-color: var(--color-white);
    height: 56px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 0;
  }
  .supportingText15 {
    width: 178px;
    position: relative;
    letter-spacing: 0.4px;
    line-height: 16px;
    display: none;
  }
  .supportingText14 {
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
    z-index: 2;
  }
  .textFieldParent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xl);
  }
  .component1variant6Wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-137xl) 0px var(--padding-138xl);
  }
  .frameGroup {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-24xl);
  }
  .frameParent {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xl-3);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xs);
    color: var(--schemes-on-surface-variant);
    font-family: var(--m3-label-large);
  }

  @media screen and (max-width: 750px) {
    .inputDatePickerParent {
      gap: var(--gap-mid);
      flex-wrap: wrap;
    }

    .component1variant6Wrapper {
      padding-left: var(--padding-59xl);
      padding-right: var(--padding-59xl);
      box-sizing: border-box;
    }

    .frameGroup {
      gap: var(--gap-2xl);
    }

    .frameParent {
      gap: var(--gap-mini);
    }
  }
</style>
