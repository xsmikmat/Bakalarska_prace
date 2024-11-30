<template>
  <div class="container-center-horizontal">
    <form class="rezervace-3-1 screen" name="form3" action="form3" method="post">
      <div class="page-2">
        <header class="header-14">
          <img class="upraveno_logo-1-1-16" :src="upraveno_Logo11" alt="upraveno_logo (1) 1" />
          <h1 class="penzion-v-srdci-esk-kanady-3 valign-text-middle heading-2">{{ penzionVSrdciEskKanady }}</h1>
          <div class="navigace-6">
            <div class="button-container-15">
              <navigace31 :oUbytovn="navigace31Props.oUbytovn" />
              <navigace32 :okol="navigace32Props.okol" />
              <navigace33 :fotogalerie="navigace33Props.fotogalerie" />
              <navigace34 :rezervace="navigace34Props.rezervace" />
              <navigace35 :kontakt="navigace35Props.kontakt" />
            </div>
          </div>
        </header>
        <div class="form-2">
          <div class="image-container-12">
            <text-field20 :iconButtonProps="textField201Props.iconButtonProps" />
            <text-field20
              :className="textField202Props.className"
              :iconButtonProps="textField202Props.iconButtonProps"
            />
            <text-field22 :className="textField22Props.className" />
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
import Navigace31 from "./Navigace31";
import Navigace32 from "./Navigace32";
import Navigace33 from "./Navigace33";
import Navigace34 from "./Navigace34";
import Navigace35 from "./Navigace35";
import TextField20 from "./TextField20";
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
  name: "Rezervace3",
  components: {
    Navigace31,
    Navigace32,
    Navigace33,
    Navigace34,
    Navigace35,
    TextField20,
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
    "penzionVSrdciEskKanady",
    "navigace31Props",
    "navigace32Props",
    "navigace33Props",
    "navigace34Props",
    "navigace35Props",
    "textField201Props",
    "textField202Props",
    "textField22Props",
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

.rezervace-3-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1391px
  width: 1512px

.page-2
  align-items: flex-end
  background-color: $white
  display: flex
  flex-direction: column
  position: relative
  width: 1512px

.header-14
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  gap: 160px
  height: 156px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.upraveno_logo-1-1-16
  height: 109px
  margin-left: -65.50px
  object-fit: cover
  position: relative
  width: 153px

.penzion-v-srdci-esk-kanady-3
  color: $black
  font-weight: 400
  height: 91px
  line-height: 44px
  position: relative
  text-align: center
  width: 454px

.navigace-6
  border-radius: 5px
  height: 84px
  margin-right: -65.50px
  overflow: hidden
  position: relative
  width: 556px

.button-container-15
  align-items: flex-end
  display: flex
  height: 44px
  left: 20px
  min-width: 434px
  position: relative
  top: 20px

.form-2
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 20px 80px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.image-container-12
  align-items: center
  display: flex
  flex-direction: column
  gap: 53px
  padding: 20px 80px
  position: relative
  width: 1038px
</style>
