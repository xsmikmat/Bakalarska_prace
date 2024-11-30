<template>
  <div class="container-center-horizontal">
    <form class="rezervace-2-1 screen" name="form2" action="form2" method="post">
      <div class="section-20">
        <div class="header-10">
          <router-link to="/homepage-2"
            ><img class="upraveno_logo-1-1-12" :src="upraveno_Logo11" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="navigace-4">
            <div class="button-container-11">
              <navigace21 :oUbytovn="navigace21Props.oUbytovn" />
              <navigace22 :okol="navigace22Props.okol" />
              <navigace23 :fotogalerie="navigace23Props.fotogalerie" />
              <component1422 />
              <navigace25 :kontakt="navigace25Props.kontakt" />
            </div>
          </div>
        </div>
        <div class="form-1">
          <input-date-picker5 />
          <input-date-picker4 :textFieldProps="inputDatePicker4Props.textFieldProps" />
          <div class="image-container-8">
            <text-field22 />
            <text-field13 :activeIndicator="textField13Props.activeIndicator" />
            <text-field14 :activeIndicator="textField14Props.activeIndicator" />
            <text-field15 :activeIndicator="textField15Props.activeIndicator" />
            <text-field16
              :activeIndicator="textField16Props.activeIndicator"
              :iconButton22Props="textField16Props.iconButton22Props"
              :supportingText3Props="textField16Props.supportingText3Props"
            />
            <text-field17 :activeIndicator="textField17Props.activeIndicator" />
            <text-field18 :activeIndicator="textField18Props.activeIndicator" />
            <text-field19 :activeIndicator="textField19Props.activeIndicator" />
            <text-field11
              :activeIndicator="textField11Props.activeIndicator"
              :className="textField11Props.className"
              :inputTextContainer9Props="textField11Props.inputTextContainer9Props"
              :iconButton22Props="textField11Props.iconButton22Props"
            />
            <component1-variant6
              :potvrditRezervaci="component1Variant6Props.potvrditRezervaci"
              :className="component1Variant6Props.className"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Navigace21 from "./Navigace21";
import Navigace22 from "./Navigace22";
import Navigace23 from "./Navigace23";
import Component1422 from "./Component1422";
import Navigace25 from "./Navigace25";
import InputDatePicker5 from "./InputDatePicker5";
import InputDatePicker4 from "./InputDatePicker4";
import TextField22 from "./TextField22";
import TextField13 from "./TextField13";
import TextField14 from "./TextField14";
import TextField15 from "./TextField15";
import TextField16 from "./TextField16";
import TextField17 from "./TextField17";
import TextField18 from "./TextField18";
import TextField19 from "./TextField19";
import TextField11 from "./TextField11";
import Component1Variant6 from "./Component1Variant6";
export default {
  name: "Rezervace2",
  components: {
    Navigace21,
    Navigace22,
    Navigace23,
    Component1422,
    Navigace25,
    InputDatePicker5,
    InputDatePicker4,
    TextField22,
    TextField13,
    TextField14,
    TextField15,
    TextField16,
    TextField17,
    TextField18,
    TextField19,
    TextField11,
    Component1Variant6,
  },
  props: [
    "upraveno_Logo11",
    "navigace21Props",
    "navigace22Props",
    "navigace23Props",
    "navigace25Props",
    "inputDatePicker4Props",
    "textField13Props",
    "textField14Props",
    "textField15Props",
    "textField16Props",
    "textField17Props",
    "textField18Props",
    "textField19Props",
    "textField11Props",
    "component1Variant6Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.rezervace-2-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1392px
  width: 1100px

.section-20
  align-items: center
  display: flex
  flex-direction: column
  padding: 20px 0px
  position: relative
  width: 1100px

.header-10
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  justify-content: space-between
  padding: 0px 100px
  position: relative
  width: 100%

.upraveno_logo-1-1-12
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.navigace-4
  border-radius: 5px
  height: 84px
  overflow: hidden
  position: relative
  width: 473px

.button-container-11
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.form-1
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 8px 20px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.image-container-8
  align-items: center
  display: flex
  flex-direction: column
  gap: 53px
  margin-left: -9.00px
  margin-right: -9.00px
  padding: 30px 0px
  position: relative
  width: 1038px
</style>
