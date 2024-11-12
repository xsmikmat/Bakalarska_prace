<template>
  <div :class="$style.rezervaceMc14">
    <div :class="$style.component1Parent">
      <div :class="$style.component1">
        <div :class="$style.button" @click="onButtonContainerClick">
          <div :class="$style.oUbytovn">O ubytování</div>
        </div>
        <div :class="$style.button1" @click="onButtonContainerClick1">
          <div :class="$style.okol">Okolí</div>
        </div>
        <div :class="$style.button2" @click="onButtonContainerClick2">
          <div :class="$style.fotogalerie">Fotogalerie</div>
        </div>
        <div
          :class="$style.property1button"
          @click="onProperty1ButtonContainerClick"
        >
          <div :class="$style.rezervace">Rezervace</div>
        </div>
        <div :class="$style.button3" @click="onButtonContainerClick3">
          <div :class="$style.konrtakt">Konrtakt</div>
        </div>
      </div>
      <div :class="$style.component2Wrapper">
        <div :class="$style.component2">
          <div :class="$style.button" @click="onButtonContainerClick">
            <div :class="$style.oUbytovn">O ubytování</div>
          </div>
          <div :class="$style.button1" @click="onButtonContainerClick1">
            <div :class="$style.okol">Okolí</div>
          </div>
          <div :class="$style.button2" @click="onButtonContainerClick2">
            <div :class="$style.fotogalerie">Fotogalerie</div>
          </div>
          <div
            :class="$style.property1button"
            @click="onProperty1ButtonContainerClick"
          >
            <div :class="$style.rezervace">Rezervace</div>
          </div>
          <div :class="$style.button3" @click="onButtonContainerClick3">
            <div :class="$style.konrtakt">Konrtakt</div>
          </div>
        </div>
      </div>
    </div>
    <section :class="$style.rezervaceMc14Inner">
      <div :class="$style.frameParent">
        <div :class="$style.inputDatePickerParent">
          <div :class="$style.inputDatePicker">
            <div :class="$style.header">
              <div :class="$style.selectDate">Select date</div>
              <div :class="$style.weekDayDayParent">
                <h1 :class="$style.weekDayDay">Den odjezdu</h1>
                <div :class="$style.iconButton">
                  <div :class="$style.container">
                    <div :class="$style.stateLayer">
                      <img
                        :class="$style.icon"
                        loading="lazy"
                        alt=""
                        src="/icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="$style.date">
              <div :class="$style.textField">
                <div :class="$style.textField1">
                  <div :class="$style.stateLayer1">
                    <div :class="$style.content">
                      <div :class="$style.inputTextContainer">
                        <div :class="$style.inputText">mm/dd/yyyy</div>
                        <img
                          :class="$style.caretIcon"
                          alt=""
                          src="/caret.svg"
                        />
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
                <div :class="$style.stateLayer2">
                  <div :class="$style.labelText1">Clear</div>
                </div>
              </div>
              <div :class="$style.buttonContainer">
                <div :class="$style.secondaryButton">
                  <div :class="$style.stateLayer2">
                    <div :class="$style.labelText2">Cancel</div>
                  </div>
                </div>
                <div :class="$style.secondaryButton">
                  <div :class="$style.stateLayer2">
                    <div :class="$style.labelText3">OK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.inputDatePicker1">
            <div :class="$style.header">
              <div :class="$style.selectDate">Select date</div>
              <div :class="$style.weekDayDayParent">
                <h1 :class="$style.weekDayDay">Den odjezdu</h1>
                <div :class="$style.iconButton">
                  <div :class="$style.container">
                    <div :class="$style.stateLayer">
                      <img
                        :class="$style.icon"
                        loading="lazy"
                        alt=""
                        src="/icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="$style.date">
              <div :class="$style.textField">
                <div :class="$style.textField3">
                  <div :class="$style.stateLayer1">
                    <div :class="$style.content">
                      <div :class="$style.inputTextContainer">
                        <div :class="$style.inputText">mm/dd/yyyy</div>
                        <img
                          :class="$style.caretIcon"
                          alt=""
                          src="/caret.svg"
                        />
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
                <div :class="$style.stateLayer2">
                  <div :class="$style.labelText1">Clear</div>
                </div>
              </div>
              <div :class="$style.buttonContainer">
                <div :class="$style.secondaryButton">
                  <div :class="$style.stateLayer2">
                    <div :class="$style.labelText2">Cancel</div>
                  </div>
                </div>
                <div :class="$style.secondaryButton">
                  <div :class="$style.stateLayer2">
                    <div :class="$style.labelText3">OK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.textField4">
          <div :class="$style.textField5">
            <div :class="$style.stateLayer1">
              <div :class="$style.content2">
                <div :class="$style.labelTextContainer2">
                  <div :class="$style.labelText8">Label</div>
                </div>
                <div :class="$style.inputTextContainer2">
                  <div :class="$style.inputText">Jméno</div>
                </div>
              </div>
              <div :class="$style.iconButton">
                <div :class="$style.container2">
                  <div :class="$style.stateLayer">
                    <img :class="$style.icon" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.activeIndicator" />
          <div :class="$style.supportingText4">
            <div :class="$style.supportContent">
              <ul :class="$style.povinnPole">
                <li>Povinné pole</li>
              </ul>
            </div>
          </div>
        </div>
        <div :class="$style.textField6">
          <div :class="$style.textField5">
            <div :class="$style.stateLayer1">
              <div :class="$style.content2">
                <div :class="$style.labelTextContainer2">
                  <div :class="$style.labelText8">Label</div>
                </div>
                <div :class="$style.inputTextContainer2">
                  <div :class="$style.inputText">Příjmení</div>
                </div>
              </div>
              <div :class="$style.iconButton">
                <div :class="$style.container2">
                  <div :class="$style.stateLayer">
                    <img :class="$style.icon" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.activeIndicator" />
          <div :class="$style.supportingText4">
            <div :class="$style.supportContent">
              <ul :class="$style.povinnPole">
                <li>Povinné pole</li>
              </ul>
            </div>
          </div>
        </div>
        <div :class="$style.textField8">
          <div :class="$style.textField5">
            <div :class="$style.stateLayer1">
              <div :class="$style.content2">
                <div :class="$style.labelTextContainer2">
                  <div :class="$style.labelText8">Label</div>
                </div>
                <div :class="$style.inputTextContainer2">
                  <div :class="$style.inputText">Ulice</div>
                </div>
              </div>
              <div :class="$style.iconButton">
                <div :class="$style.container2">
                  <div :class="$style.stateLayer">
                    <img :class="$style.icon" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.activeIndicator" />
          <div :class="$style.supportingText4">
            <div :class="$style.supportContent">
              <ul :class="$style.povinnPole">
                <li>Povinné pole</li>
              </ul>
            </div>
          </div>
        </div>
        <div :class="$style.textField10">
          <div :class="$style.textField5">
            <div :class="$style.stateLayer1">
              <div :class="$style.content2">
                <div :class="$style.labelTextContainer2">
                  <div :class="$style.labelText8">Label</div>
                </div>
                <div :class="$style.inputTextContainer2">
                  <div :class="$style.inputText">Číslo popisné</div>
                </div>
              </div>
              <div :class="$style.iconButton">
                <div :class="$style.container2">
                  <div :class="$style.stateLayer">
                    <img :class="$style.icon" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.activeIndicator" />
          <div :class="$style.supportingText4">
            <div :class="$style.supportContent">
              <ul :class="$style.povinnPole">
                <li>Povinné pole</li>
              </ul>
            </div>
          </div>
        </div>
        <div :class="$style.textField12">
          <div :class="$style.textField5">
            <div :class="$style.stateLayer1">
              <div :class="$style.content2">
                <div :class="$style.labelTextContainer2">
                  <div :class="$style.labelText8">Label</div>
                </div>
                <div :class="$style.inputTextContainer2">
                  <div :class="$style.inputText">Město</div>
                </div>
              </div>
              <div :class="$style.iconButton">
                <div :class="$style.container2">
                  <div :class="$style.stateLayer">
                    <img :class="$style.icon" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.activeIndicator" />
          <div :class="$style.supportingText4">
            <div :class="$style.supportContent">
              <ul :class="$style.povinnPole">
                <li>Povinné pole</li>
              </ul>
            </div>
          </div>
        </div>
        <div :class="$style.textField14">
          <div :class="$style.textField5">
            <div :class="$style.stateLayer1">
              <div :class="$style.content2">
                <div :class="$style.labelTextContainer2">
                  <div :class="$style.labelText8">Label</div>
                </div>
                <div :class="$style.inputTextContainer2">
                  <div :class="$style.inputText">PSČ</div>
                </div>
              </div>
              <div :class="$style.iconButton">
                <div :class="$style.container2">
                  <div :class="$style.stateLayer">
                    <img :class="$style.icon" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.activeIndicator" />
          <div :class="$style.supportingText4">
            <div :class="$style.supportContent">
              <ul :class="$style.povinnPole">
                <li>Povinné pole</li>
              </ul>
            </div>
          </div>
        </div>
        <div :class="$style.textField16">
          <div :class="$style.textField5">
            <div :class="$style.stateLayer1">
              <div :class="$style.content2">
                <div :class="$style.labelTextContainer2">
                  <div :class="$style.labelText8">Label</div>
                </div>
                <div :class="$style.inputTextContainer2">
                  <div :class="$style.inputText">Telefon</div>
                </div>
              </div>
              <div :class="$style.iconButton">
                <div :class="$style.container2">
                  <div :class="$style.stateLayer">
                    <img :class="$style.icon" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.activeIndicator" />
          <div :class="$style.supportingText4">
            <div :class="$style.supportContent">
              <ul :class="$style.povinnPole">
                <li>Povinné pole</li>
              </ul>
            </div>
          </div>
        </div>
        <div :class="$style.frameGroup">
          <div :class="$style.textFieldParent">
            <div :class="$style.textField4">
              <div :class="$style.textField5">
                <div :class="$style.stateLayer1">
                  <div :class="$style.content2">
                    <div :class="$style.labelTextContainer2">
                      <div :class="$style.labelText8">Label</div>
                    </div>
                    <div :class="$style.inputTextContainer2">
                      <div :class="$style.inputText">Email</div>
                    </div>
                  </div>
                  <div :class="$style.iconButton">
                    <div :class="$style.container2">
                      <div :class="$style.stateLayer">
                        <img :class="$style.icon" alt="" src="/icon-2.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="$style.activeIndicator" />
              <div :class="$style.supportingText4">
                <div :class="$style.supportContent">
                  <ul :class="$style.povinnPole">
                    <li>Povinné pole</li>
                  </ul>
                </div>
              </div>
            </div>
            <div :class="$style.textField4">
              <div :class="$style.textField21">
                <div :class="$style.stateLayer1">
                  <div :class="$style.content2">
                    <div :class="$style.labelTextContainer2">
                      <div :class="$style.labelText8">Label</div>
                    </div>
                    <div :class="$style.inputTextContainer2">
                      <div :class="$style.inputText">Poznámky</div>
                    </div>
                  </div>
                  <div :class="$style.iconButton">
                    <div :class="$style.container2">
                      <div :class="$style.stateLayer">
                        <img :class="$style.icon" alt="" src="/icon-2.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="$style.activeIndicator" />
              <div :class="$style.supportingText18">
                <div :class="$style.supportingText19">
                  <ul :class="$style.povinnPole">
                    <li>Povinné pole</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.component1variant6Wrapper">
            <div :class="$style.component1variant6">
              <div :class="$style.rezervace">Potvrdit rezervaci</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "RezervaceMc",
    methods: {
      onButtonContainerClick() {
        this.$router.push("/o-ubytovn-mc14");
      },
      onButtonContainerClick1() {
        this.$router.push("/okol-mc14");
      },
      onButtonContainerClick2() {
        this.$router.push("/fotogalerie-mc14");
      },
      onProperty1ButtonContainerClick() {
        this.$router.push("/rezervace-mc14");
      },
      onButtonContainerClick3() {
        this.$router.push("/kontakt-mc14");
      },
    },
  });
</script>
<style module>
  .oUbytovn {
    height: 15px;
    width: 81px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button {
    height: 44px;
    width: 80px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
  }
  .okol {
    height: 15px;
    width: 35px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button1 {
    height: 44px;
    width: 34px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
  }
  .fotogalerie {
    height: 15px;
    width: 78px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button2 {
    height: 44px;
    width: 77px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
  }
  .rezervace {
    position: relative;
    font-weight: 600;
  }
  .property1button {
    width: 100px;
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    height: 40px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-6xl);
    box-sizing: border-box;
    cursor: pointer;
    z-index: 5;
    font-size: var(--m3-body-large-size);
    color: var(--color-darkseagreen);
  }
  .konrtakt {
    height: 15px;
    width: 59px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button3 {
    height: 44px;
    width: 58px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
    z-index: 4;
  }
  .component1 {
    height: 84px;
    width: 473px;
    border-radius: var(--br-8xs);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-2xl);
  }
  .component2 {
    width: 473px;
    height: 84px;
    border-radius: var(--br-8xs);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-2xl);
  }
  .component2Wrapper {
    height: 82px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 2px;
    box-sizing: border-box;
    max-width: calc(100% - 1019px);
  }
  .component1Parent {
    width: 513px;
    height: 82px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-xl);
    box-sizing: border-box;
    gap: 546px;
    max-width: 100%;
  }
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
    font-size: var(--m3-body-small-size);
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
  .stateLayer1 {
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
    font-size: var(--m3-body-small-size);
    color: var(--m3-sys-light-on-surface-variant);
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
    font-size: var(--m3-body-large-size);
    color: var(--schemes-on-surface);
  }
  .labelText1 {
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
  .stateLayer2 {
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
  .labelText2 {
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
  .labelText3 {
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
    color: var(--m3-sys-light-primary);
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
  }
  .textField3 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    border: 3px solid var(--color-darkseagreen);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 0;
  }
  .inputDatePicker1 {
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
    z-index: 1;
  }
  .inputDatePickerParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 35px;
    font-size: var(--m3-label-large-size);
  }
  .labelText8 {
    height: 16px;
    width: 31px;
    position: relative;
    letter-spacing: 0.4px;
    line-height: 16px;
    display: inline-block;
  }
  .labelTextContainer2 {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .inputTextContainer2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: var(--m3-body-large-size);
    color: var(--schemes-on-surface);
  }
  .content2 {
    flex: 1;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-9xs) 0px;
    box-sizing: border-box;
  }
  .container2 {
    border-radius: var(--br-81xl);
    overflow: hidden;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .textField5 {
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
    border-top: 1px solid var(--m3-sys-light-on-surface-variant);
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
  .supportingText4 {
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
    z-index: 4;
  }
  .textField8 {
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
    z-index: 9;
  }
  .textField12 {
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
  .textField14 {
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
  .textField16 {
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
  .textField21 {
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
  .supportingText19 {
    width: 178px;
    position: relative;
    letter-spacing: 0.4px;
    line-height: 16px;
    display: none;
  }
  .supportingText18 {
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
  .component1variant6 {
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    height: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-6xl);
    box-sizing: border-box;
  }
  .component1variant6Wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 156px 0px 157px;
    font-size: var(--m3-body-large-size);
    color: var(--color-darkseagreen);
    font-family: var(--subtext);
  }
  .frameGroup {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 43px;
  }
  .frameParent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30.3px;
    max-width: 100%;
  }
  .rezervaceMc14Inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 21px 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--m3-body-small-size);
    color: var(--m3-sys-light-on-surface-variant);
    font-family: var(--m3-body-small);
  }
  .rezervaceMc14 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 218px;
    box-sizing: border-box;
    gap: 177px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--text-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }

  @media screen and (max-width: 750px) {
    .rezervaceMc14 {
      gap: var(--gap-69xl);
    }
  }
  @media screen and (max-width: 675px) {
    .component1Parent {
      gap: 273px;
    }

    .inputDatePickerParent {
      gap: 17px;
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
  @media screen and (max-width: 450px) {
    .component1Parent {
      gap: 136px;
    }

    .rezervaceMc14 {
      gap: var(--gap-25xl);
    }
  }
</style>
