<template>
  <div class="container-center-horizontal">
    <form class="o-ubytovani-2 screen" name="form5" action="form5" method="post">
      <div class="section-28">
        <header class="header-17">
          <router-link to="/homepage-2"
            ><img class="upraveno_logo-1-1-20" :src="upraveno_Logo111" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="navigace-8">
            <div class="button-container-19">
              <navigace41 :oUbytovn="navigace41Props.oUbytovn" />
              <navigace42 :okol="navigace42Props.okol" />
              <navigace43 :fotogalerie="navigace43Props.fotogalerie" />
              <navigace44 :rezervace="navigace44Props.rezervace" />
              <navigace45 :kontakt="navigace45Props.kontakt" />
            </div>
          </div>
        </header>
        <div class="section-29">
          <div class="container-24">
            <h1 class="title-32 heading-1">{{ title1 }}</h1>
            <p class="description-16 subtext">{{ description1 }}</p>
          </div>
          <div class="image-container-19"><img class="image-1-5" :src="image1" alt="image 1" /></div>
        </div>
        <div class="products-1">
          <div class="container-25">
            <div class="container-26">
              <div class="title-33 heading-2">{{ title2 }}</div>
            </div>
            <div class="section-30">
              <div class="image-container-20">
                <div class="image-12">
                  <div class="overlap-group-3">
                    <div class="title-34 valign-text-middle roboto-normal-black-12px">{{ title3 }}</div>
                    <tag :className="tagProps.className" />
                    <img class="s-obrazem-1-1" :src="sObrazem1" alt="S obrazem 1" />
                  </div>
                </div>
              </div>
              <div class="image-container-21">
                <div class="image-13"><img class="u-tresne-1" :src="uTresne1" alt="U tresne 1" /></div>
              </div>
            </div>
            <div class="text-content-4">
              <component1-variant6
                :potvrditRezervaci="component1Variant6Props.potvrditRezervaci"
                :className="component1Variant6Props.className"
              />
            </div>
          </div>
        </div>
        <div class="contents-5">
          <div class="container-27">
            <div class="container-24">
              <div class="title-32 heading-1">{{ title4 }}</div>
              <p class="description-16 subtext">{{ description2 }}</p>
            </div>
            <image-container62 />
          </div>
          <div class="list-16">
            <div class="row-7">
              <div class="article-2">
                <image-container4 :frameProps="imageContainer4Props.frameProps" />
                <frame42731890632 :title="frame427318906321Props.title" :subtitle="frame427318906321Props.subtitle" />
              </div>
              <div class="article-3">
                <frame :src="frame1Props.src" :className="frame1Props.className" />
                <div class="frame-427318906-6">
                  <div class="title-35 subtext">{{ title5 }}</div>
                  <p class="subtitle-9 text">{{ subtitle }}</p>
                </div>
              </div>
              <div class="article-2">
                <frame :src="frame2Props.src" :className="frame2Props.className" />
                <frame42731890632
                  :title="frame427318906322Props.title"
                  :subtitle="frame427318906322Props.subtitle"
                  :className="frame427318906322Props.className"
                />
              </div>
            </div>
          </div>
        </div>
        <footer class="footer-9">
          <img class="upraveno_logo-1-1-21" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container2 />
          <div class="component-1-10">
            <div class="button-container-20">
              <component151 :oUbytovn="component151Props.oUbytovn" />
              <component152 :okol="component152Props.okol" />
              <component153 :fotogalerie="component153Props.fotogalerie" />
              <component154 :rezervace="component154Props.rezervace" />
              <component155 :kontakt="component155Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import Navigace41 from "./Navigace41";
import Navigace42 from "./Navigace42";
import Navigace43 from "./Navigace43";
import Navigace44 from "./Navigace44";
import Navigace45 from "./Navigace45";
import Tag from "./Tag";
import ImageContainer62 from "./ImageContainer62";
import ImageContainer4 from "./ImageContainer4";
import Frame42731890632 from "./Frame42731890632";
import Frame from "./Frame";
import Container2 from "./Container2";
import Component151 from "./Component151";
import Component152 from "./Component152";
import Component153 from "./Component153";
import Component154 from "./Component154";
import Component155 from "./Component155";
export default {
  name: "OUbytovani2",
  components: {
    Navigace41,
    Navigace42,
    Navigace43,
    Navigace44,
    Navigace45,
    Tag,
    ImageContainer62,
    ImageContainer4,
    Frame42731890632,
    Frame,
    Container2,
    Component151,
    Component152,
    Component153,
    Component154,
    Component155,
  },
  props: [
    "upraveno_Logo111",
    "title1",
    "description1",
    "image1",
    "title2",
    "title3",
    "sObrazem1",
    "uTresne1",
    "title4",
    "description2",
    "title5",
    "subtitle",
    "upraveno_Logo112",
    "navigace41Props",
    "navigace42Props",
    "navigace43Props",
    "navigace44Props",
    "navigace45Props",
    "tagProps",
    "component1Variant6Props",
    "imageContainer4Props",
    "frame427318906321Props",
    "frame1Props",
    "frame2Props",
    "frame427318906322Props",
    "component151Props",
    "component152Props",
    "component153Props",
    "component154Props",
    "component155Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.o-ubytovani-2
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1945px
  overflow: hidden
  width: 1100px

.section-28
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 1100px

.header-17
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  justify-content: space-between
  padding: 0px 100px
  position: relative
  width: 100%

.upraveno_logo-1-1-20
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.navigace-8
  border-radius: 5px
  height: 84px
  overflow: hidden
  position: relative
  width: 473px

.button-container-19
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.section-29,
.products-1,
.container-27
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 20px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.container-24
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 24px
  position: relative

.title-32
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative

.description-16
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative

.image-container-19
  align-items: flex-start
  display: flex
  flex: 1
  flex-grow: 1
  height: 380px
  padding: 30px 0px
  position: relative

.image-1-5
  height: 346px
  margin-bottom: -26.00px
  object-fit: cover
  position: relative
  width: 480px

.container-25
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 20px
  justify-content: center
  padding: 20px 40px
  position: relative

.container-26
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-33
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center

.section-30
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 100%

.image-container-20
  align-items: flex-start
  display: flex
  flex-wrap: wrap
  gap: 0px 0px
  height: 340px
  position: relative
  width: 448px

.image-12
  height: 340px
  position: relative
  width: 448px

.overlap-group-3
  height: 340px
  position: relative

.title-34
  height: 16px
  left: 16px
  letter-spacing: 0
  line-height: 16px
  position: absolute
  text-align: center
  top: 161px
  white-space: nowrap
  width: 416px

.s-obrazem-1-1,
.u-tresne-1
  height: 340px
  left: 0
  object-fit: cover
  position: absolute
  top: 0
  width: 448px

.image-container-21
  align-items: center
  display: flex
  height: 340px
  justify-content: center
  position: relative
  width: 448px

.image-13
  align-self: stretch
  background-color: $iron
  flex: 1
  flex-grow: 1
  position: relative

.text-content-4
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 4px
  justify-content: center
  padding: 18px 12px 12px
  position: relative
  width: 100%

.contents-5
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 60px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.list-16
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 100%

.row-7
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 20px
  position: relative
  width: 100%

.article-2
  align-items: flex-start
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 1
  flex-grow: 1
  gap: 16px
  justify-content: center
  padding: 16px
  position: relative

.article-3
  align-items: flex-start
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  gap: 16px
  justify-content: center
  padding: 16px
  position: relative
  width: 320px

.frame-427318906-6
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 8px
  position: relative

.title-35
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  margin-top: -1.00px
  position: relative

.subtitle-9
  -webkit-box-orient: vertical
  -webkit-line-clamp: 3
  align-self: stretch
  color: $gray
  display: -webkit-box
  font-weight: 400
  height: 48px
  line-height: 15px
  overflow: hidden
  position: relative
  text-overflow: ellipsis

.footer-9
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

.upraveno_logo-1-1-21
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.component-1-10
  border-radius: 5px
  height: 250px
  overflow: hidden
  position: relative
  width: 200px

.button-container-20
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
