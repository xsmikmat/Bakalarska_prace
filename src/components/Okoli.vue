<template>
  <div class="screen">
    <navigace_final/>
    <div class="okoli-uvod">
      <div>
        <h1 class="heading-1">Co nabízí okolí</h1>
        <p class="description-18 subtext">Různé aktivity a výlety pro všechny</p>
      </div>
      <div class="image-container-okoli"><img class="image-okoli" src="../../img/okoli-10-1.png" alt="image 1"/></div>
    </div>
    <div class="list-21">
        <div class="heading-1">Doporučené aktivity</div>
      <div class="list-22">
        <div class="row-11">
          <div class="item-9">
            <frame2/>
            <button class="frame-427318906-11">
              <div class="title-48 roboto-bold-black-20px">Pro turisty</div>
              <div class="subtitle-13 roboto-normal-black-16px-2">aktivity v dochozí vzdálenosti</div>
            </button>
          </div>
          <div class="item-9">
            <frame3/>
            <button class="frame-427318906-11">
              <div class="title-48 roboto-bold-black-20px">Pro cyklisty</div>
              <div class="subtitle-13 roboto-normal-black-16px-2">Delší vzdálenost pro hezké projížďky</div>
            </button>
          </div>
          <div class="item-9">
            <frame4/>
            <button class="frame-427318906-11">
              <div class="title-48 roboto-bold-black-20px">Pro plavce a vodáky</div>
              <div class="subtitle-13 roboto-normal-black-16px-2">Zábava do vody ne jen pro děti</div>
            </button>
          </div>
        </div>
      </div>
      <div class="list-23">
        <div class="row-12">
          <div class="card-6">
            <div class="image-container-30">
              <div class="image-15">
                <div class="title-46 valign-text-middle roboto-normal-black-12px">{{ title3 }}</div>
                <tag2/>
              </div>
            </div>
            <div class="text-content-6">
              <div class="subtitle-14 roboto-medium-black-20px">{{ subtitle2 }}</div>
              <p class="title-49 roboto-normal-black-16px">
                    <span class="roboto-normal-black-16px">{{ spanText1 }}</span
                    ><span class="span1 roboto-normal-black-16px">{{ spanText2 }}</span
              ><span class="roboto-normal-black-16px">{{ spanText3 }}</span>
              </p>
            </div>
          </div>
          <div class="card-6">
            <div class="image-container-30">
              <div class="image-15">
                <div class="title-46 valign-text-middle roboto-normal-black-12px">{{ title4 }}</div>
                <tag3/>
              </div>
            </div>
            <text-content22 :subtitle="textContent221Props.subtitle" :title="textContent221Props.title"/>
          </div>
          <div class="card-7">
            <div class="image-container-30">
              <div class="image-15">
                <div class="title-46 valign-text-middle roboto-normal-black-12px">{{ title5 }}</div>
                <tag4/>
              </div>
            </div>
            <text-content22 :subtitle="textContent222Props.subtitle" :title="textContent222Props.title"/>
          </div>
        </div>
      </div>
    </div>
    <footer-final/>
  </div>

</template>

<script>
import ImageContainer5 from "./ImageContainer5";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import Frame4 from "./Frame4";
import Tag2 from "./Tag2";
import Tag3 from "./Tag3";
import TextContent22 from "./TextContent22";
import Tag4 from "./Tag4";
import Container from "./Container";
import Navigace_final from "@/components/navigace_final.vue";
import FooterFinal from "@/components/footer_final.vue";

export default {
  name: "Okoli",
  components: {
    FooterFinal,
    Navigace_final,
    ImageContainer5,
    Frame2,
    Frame3,
    Frame4,
    Tag2,
    Tag3,
    TextContent22,
    Tag4,
    Container,
  },
  props: [
    "title1",
    "title2",
    "subtitle1",
    "title3",
    "subtitle2",
    "spanText1",
    "spanText2",
    "spanText3",
    "title4",
    "title5",
    "upraveno_Logo112",
    "container4Props",
    "imageContainer5Props",
    "frame427318906521Props",
    "frame427318906522Props",
    "textContent221Props",
    "textContent222Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'
.image-container-okoli
  align-items: flex-start
  display: flex
  flex: 1
  position: relative

.image-okoli
  height: 400px
  width: 100%
  object-fit: cover
  position: relative

.list-21
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.okoli-uvod
  align-items: center
  display: flex
  flex: 0 0 auto
  flex-direction: row
  gap: 20px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.container-35
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-47
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 520px

.list-22
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px
  position: relative
  width: 100%

.row-11,
.row-12
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  position: relative
  width: 100%

.item-9
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative

.frame-427318906-11
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-48
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-13
  align-self: stretch
  letter-spacing: 0
  line-height: 24px
  position: relative
  text-align: center

.list-23
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  position: relative
  width: 100%

.card-6
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

.image-container-30
  align-items: flex-start
  align-self: stretch
  display: flex
  height: 340px
  position: relative
  width: 100%

.image-15
  align-self: stretch
  background-color: $iron
  flex: 1
  flex-grow: 1
  position: relative

.title-46
  height: 16px
  left: 16px
  letter-spacing: 0
  line-height: 16px
  position: absolute
  text-align: center
  top: 161px
  white-space: nowrap
  width: 392px

.text-content-6
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 4px
  padding: 12px
  position: relative
  width: 100%

.subtitle-14
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative

.title-49
  align-self: stretch
  letter-spacing: 0
  line-height: 24px
  position: relative

.span1
  text-decoration: underline

.card-7
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

@media screen and (max-width: 768px)
  .okoli-uvod
    flex-direction: column
    gap: 0px
    width: 100%
  .image-container-okoli
    height: 200px
  .image-okoli
    height: 200px
  .row-12
    flex-direction: column
    gap: 8px

</style>
