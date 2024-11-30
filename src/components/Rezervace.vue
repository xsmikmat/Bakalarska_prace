<template>
  <div class="container-center-horizontal">
    <form class="rezervace-1-1 screen" name="form1" action="form1" method="post">
      <div class="section-19">
        <div class="header-8">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-11" :src="upraveno_Logo11" alt="upraveno_logo (1) 1" /></router-link
          ><router-link to="/navigace-mobil"
            ><img
              class="menu-3"
              src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/6746cea99d6a8703ef5210fc/img/menu-2.svg"
              alt="menu"
            />
          </router-link>
        </div>
        <div class="form">
          <input-date-picker />
          <input-date-picker2 :textField2Props="inputDatePicker2Props.textField2Props" />
          <div class="image-container-7">
            <text-field3 :activeIndicator="textField3Props.activeIndicator" />
            <text-field4 :activeIndicator="textField4Props.activeIndicator" />
            <text-field5 :activeIndicator="textField5Props.activeIndicator" />
            <text-field6 :activeIndicator="textField6Props.activeIndicator" />
            <text-field7
              :activeIndicator="textField7Props.activeIndicator"
              :iconButton22Props="textField7Props.iconButton22Props"
              :iconButton22Props2="textField7Props.iconButton22Props2"
            />
            <text-field8 :activeIndicator="textField8Props.activeIndicator" />
            <text-field9 :activeIndicator="textField9Props.activeIndicator" />
            <text-field10 :activeIndicator="textField10Props.activeIndicator" />
            <text-field11
              :activeIndicator="textField11Props.activeIndicator"
              :inputTextContainer9Props="textField11Props.inputTextContainer9Props"
              :iconButton22Props="textField11Props.iconButton22Props"
            />
            <component1-variant6 :potvrditRezervaci="component1Variant6Props.potvrditRezervaci" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputDatePicker from "./InputDatePicker";
import InputDatePicker2 from "./InputDatePicker2";
import TextField3 from "./TextField3";
import TextField4 from "./TextField4";
import TextField5 from "./TextField5";
import TextField6 from "./TextField6";
import TextField7 from "./TextField7";
import TextField8 from "./TextField8";
import TextField9 from "./TextField9";
import TextField10 from "./TextField10";
import TextField11 from "./TextField11";
import Component1Variant6 from "./Component1Variant6";
export default {
  name: "Rezervace",
  components: {
    InputDatePicker,
    InputDatePicker2,
    TextField3,
    TextField4,
    TextField5,
    TextField6,
    TextField7,
    TextField8,
    TextField9,
    TextField10,
    TextField11,
    Component1Variant6,
  },
  props: [
    "upraveno_Logo11",
    "inputDatePicker2Props",
    "textField3Props",
    "textField4Props",
    "textField5Props",
    "textField6Props",
    "textField7Props",
    "textField8Props",
    "textField9Props",
    "textField10Props",
    "textField11Props",
    "component1Variant6Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.rezervace-1-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1147px
  width: 375px

.section-19
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 3px
  padding: 20px 0px
  position: relative
  width: 372px

.header-8
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 80px
  justify-content: center
  position: relative
  width: 100%

.upraveno_logo-1-1-11
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.menu-3
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.form
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 8px 8px
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 100%

.image-container-7
  align-items: flex-start
  display: flex
  flex-wrap: wrap
  gap: 20px 8px
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 350px
</style>
