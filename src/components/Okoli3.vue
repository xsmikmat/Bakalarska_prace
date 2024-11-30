<template>
  <div class="container-center-horizontal">
    <div class="okoli-3 screen">
      <div class="section-34">
        <header class="header-19">
          <router-link to="/homepage-2"
            ><img class="upraveno_logo-1-1-27" :src="upraveno_Logo111" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="navigace-11">
            <div class="button-container-26">
              <navigace56 :oUbytovn="navigace56Props.oUbytovn" />
              <navigace57 :okol="navigace57Props.okol" />
              <navigace58 :fotogalerie="navigace58Props.fotogalerie" />
              <navigace59 :rezervace="navigace59Props.rezervace" />
              <navigace60 :kontakt="navigace60Props.kontakt" />
            </div>
          </div>
        </header>
        <div class="section-35">
          <div class="container-36">
            <h1 class="title-53 heading-1">{{ title1 }}</h1>
            <p class="description-21 subtext">{{ description }}</p>
          </div>
          <div class="image-container-32">
            <img class="okoli-10-1-2" :src="okoli101" alt="Okoli 10 1" />
            <div class="image-16"></div>
          </div>
        </div>
        <div class="list-24">
          <div class="container-37">
            <div class="title-54 heading-1">{{ title2 }}</div>
          </div>
          <div class="list-25">
            <div class="row-13">
              <div class="item-10">
                <frame2 />
                <div class="frame-427318906-13">
                  <div class="title-55 roboto-bold-black-20px">{{ title3 }}</div>
                  <div class="subtitle-17 roboto-normal-black-16px-2">{{ subtitle1 }}</div>
                </div>
              </div>
              <div class="item-10">
                <frame3 />
                <frame4273189064 :title="frame42731890641Props.title" :subtitle="frame42731890641Props.subtitle" />
              </div>
              <div class="item-10">
                <frame4 />
                <frame4273189064 :title="frame42731890642Props.title" :subtitle="frame42731890642Props.subtitle" />
              </div>
            </div>
          </div>
          <div class="list-26">
            <div class="row-14">
              <div class="card-8">
                <div class="image-container-31">
                  <div class="image-16">
                    <div class="title-52 valign-text-middle roboto-normal-black-12px">{{ title4 }}</div>
                    <tag2 />
                  </div>
                </div>
                <div class="text-content-8">
                  <div class="subtitle-18 roboto-medium-black-20px">{{ subtitle2 }}</div>
                  <p class="title-56 roboto-normal-black-16px">
                    <span class="roboto-normal-black-16px">{{ spanText1 }}</span
                    ><span class="span1-1 roboto-normal-black-16px">{{ spanText2 }}</span
                    ><span class="roboto-normal-black-16px">{{ spanText3 }}</span>
                  </p>
                </div>
              </div>
              <div class="card-8">
                <div class="image-container-31">
                  <div class="image-16">
                    <div class="title-52 valign-text-middle roboto-normal-black-12px">{{ title5 }}</div>
                    <tag3 />
                  </div>
                </div>
                <text-content :subtitle="textContent1Props.subtitle" :title="textContent1Props.title" />
              </div>
              <div class="card-9">
                <div class="image-container-31">
                  <div class="image-16">
                    <div class="title-52 valign-text-middle roboto-normal-black-12px">{{ title6 }}</div>
                    <tag4 />
                  </div>
                </div>
                <text-content :subtitle="textContent2Props.subtitle" :title="textContent2Props.title" />
              </div>
            </div>
          </div>
        </div>
        <footer class="footer-13">
          <img class="upraveno_logo-1-1-28" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container2 />
          <div class="component-1-14">
            <div class="button-container-27">
              <component171 :oUbytovn="component171Props.oUbytovn" />
              <component172 :okol="component172Props.okol" />
              <component173 :fotogalerie="component173Props.fotogalerie" />
              <component174 :rezervace="component174Props.rezervace" />
              <component175 :kontakt="component175Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navigace56 from "./Navigace56";
import Navigace57 from "./Navigace57";
import Navigace58 from "./Navigace58";
import Navigace59 from "./Navigace59";
import Navigace60 from "./Navigace60";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import Frame4273189064 from "./Frame4273189064";
import Frame4 from "./Frame4";
import Tag2 from "./Tag2";
import Tag3 from "./Tag3";
import TextContent from "./TextContent";
import Tag4 from "./Tag4";
import Container2 from "./Container2";
import Component171 from "./Component171";
import Component172 from "./Component172";
import Component173 from "./Component173";
import Component174 from "./Component174";
import Component175 from "./Component175";
export default {
  name: "Okoli3",
  components: {
    Navigace56,
    Navigace57,
    Navigace58,
    Navigace59,
    Navigace60,
    Frame2,
    Frame3,
    Frame4273189064,
    Frame4,
    Tag2,
    Tag3,
    TextContent,
    Tag4,
    Container2,
    Component171,
    Component172,
    Component173,
    Component174,
    Component175,
  },
  props: [
    "upraveno_Logo111",
    "title1",
    "description",
    "okoli101",
    "title2",
    "title3",
    "subtitle1",
    "title4",
    "subtitle2",
    "spanText1",
    "spanText2",
    "spanText3",
    "title5",
    "title6",
    "upraveno_Logo112",
    "navigace56Props",
    "navigace57Props",
    "navigace58Props",
    "navigace59Props",
    "navigace60Props",
    "frame42731890641Props",
    "frame42731890642Props",
    "textContent1Props",
    "textContent2Props",
    "component171Props",
    "component172Props",
    "component173Props",
    "component174Props",
    "component175Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.okoli-3
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1827px
  width: 1100px

.section-34
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 1100px

.header-19
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  justify-content: space-between
  padding: 0px 100px
  position: relative
  width: 100%

.upraveno_logo-1-1-27
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.navigace-11
  border-radius: 5px
  height: 84px
  overflow: hidden
  position: relative
  width: 473px

.button-container-26
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.section-35
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 20px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.container-36
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 24px
  position: relative
  width: 435px

.title-53
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative

.description-21
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative

.image-container-32
  align-items: flex-start
  display: flex
  height: 400px
  overflow: hidden
  position: relative
  width: 446px

.okoli-10-1-2
  height: 400px
  object-fit: cover
  position: relative
  width: 446px

.image-16
  align-self: stretch
  background-color: $iron
  flex: 1
  flex-grow: 1
  position: relative

.list-24
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.container-37
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-54
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 520px

.list-25
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 100%

.row-13,
.row-14
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  position: relative
  width: 100%

.item-10
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative

.frame-427318906-13
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-55
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-17
  align-self: stretch
  letter-spacing: 0
  line-height: 24px
  position: relative
  text-align: center

.list-26
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  justify-content: center
  padding: 0px 20px
  position: relative
  width: 100%

.card-8
  align-items: center
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  overflow: hidden
  position: relative

.image-container-31
  align-items: flex-start
  align-self: stretch
  display: flex
  height: 340px
  position: relative
  width: 100%

.title-52
  height: 16px
  left: 16px
  letter-spacing: 0
  line-height: 16px
  position: absolute
  text-align: center
  top: 161px
  white-space: nowrap
  width: 268px

.text-content-8
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 4px
  padding: 12px
  position: relative
  width: 100%

.subtitle-18
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative

.title-56
  align-self: stretch
  letter-spacing: 0
  line-height: 24px
  position: relative

.span1-1
  text-decoration: underline

.card-9
  align-items: center
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  height: 540px
  overflow: hidden
  position: relative

.footer-13
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  gap: 40px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.upraveno_logo-1-1-28
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.component-1-14
  border-radius: 5px
  height: 250px
  overflow: hidden
  position: relative
  width: 200px

.button-container-27
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
