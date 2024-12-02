<template>
  <div class="container-center-horizontal">
    <form class="o-ubytovani-1 screen" name="form4" action="form4" method="post">
      <div class="section-26">
        <header class="header-16">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-19" :src="upraveno_Logo111" alt="upraveno_logo (1) 1" /></router-link
          ><router-link to="/navigace-mobil"
            ><img
              class="menu-5"
              src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/6746cea99d6a8703ef5210fc/img/menu-2.svg"
              alt="menu"
            />
          </router-link>
        </header>
        <div class="section-27">
          <div class="container-21">
            <h1 class="title-28 heading-2">{{ title1 }}</h1>
            <p class="description-15 subtext">{{ description }}</p>
          </div>
          <div class="image-container-13"><img class="image-1-4" :src="image1" alt="image 1" /></div>
        </div>
        <div class="products">
          <div class="container-22">
            <div class="container-23">
              <div class="title-29 subtext">{{ title2 }}</div>
            </div>
            <div class="list-14">
              <div class="row-5">
                <div class="card-4">
                  <div class="image-container-14">
                    <div class="image-11">
                      <div class="overlap-group-2">
                        <div class="title-30 valign-text-middle roboto-normal-black-12px">{{ title3 }}</div>
                        <tag />
                        <img class="s-obrazem-1" :src="sObrazem1" alt="S obrazem 1" />
                      </div>
                    </div>
                  </div>
                  <div class="text-content-3">
                    <component1-variant6
                      :potvrditRezervaci="component1Variant6Props.potvrditRezervaci"
                      :className="component1Variant6Props.className"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-15">
          <div class="row-6">
            <div class="article">
              <image-container4 :frameProps="imageContainer4Props.frameProps" />
              <frame427318906 :title="frame427318906Props.title" :subtitle="frame427318906Props.subtitle" />
            </div>
            <x-article
              :frameProps="xArticle1Props.frameProps"
              :frame427318906Props="xArticle1Props.frame427318906Props"
            />
            <x-article
              :frameProps="xArticle2Props.frameProps"
              :frame427318906Props="xArticle2Props.frame427318906Props"
            />
          </div>
        </div>
        <footer class="footer-8">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-19" :src="upraveno_Logo112" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="component-1-9">
            <div class="button-container-18">
              <component146 :oUbytovn="component146Props.oUbytovn" />
              <component147 :okol="component147Props.okol" />
              <component148 :fotogalerie="component148Props.fotogalerie" />
              <component149 :rezervace="component149Props.rezervace" />
              <component150 :kontakt="component150Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import Tag from "./Tag";
import ImageContainer4 from "./ImageContainer4";
import Frame427318906 from "./Frame427318906";
import XArticle from "./XArticle";
import Component146 from "./Component146";
import Component147 from "./Component147";
import Component148 from "./Component148";
import Component149 from "./Component149";
import Component150 from "./Component150";
export default {
  name: "OUbytovani",
  components: {
    Tag,
    ImageContainer4,
    Frame427318906,
    XArticle,
    Component146,
    Component147,
    Component148,
    Component149,
    Component150,
  },
  props: [
    "upraveno_Logo111",
    "title1",
    "description",
    "image1",
    "title2",
    "title3",
    "sObrazem1",
    "upraveno_Logo112",
    "component1Variant6Props",
    "imageContainer4Props",
    "frame427318906Props",
    "xArticle1Props",
    "xArticle2Props",
    "component146Props",
    "component147Props",
    "component148Props",
    "component149Props",
    "component150Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.o-ubytovani-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1657px
  width: 375px

.section-26
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 3px
  padding: 20px 0px
  position: relative
  width: 372px

.header-16
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  gap: 80px
  justify-content: center
  position: relative
  width: 100%

.upraveno_logo-1-1-19
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.menu-5
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.section-27
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  padding: 8px 0px
  position: relative
  width: 100%

.container-21
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-28
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center

.description-15
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center

.image-container-13
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 100%

.image-1-4
  height: 258px
  object-fit: cover
  position: relative
  width: 315px

.products
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 8px 8px
  justify-content: center
  padding: 8px 20px
  position: relative
  width: 100%

.container-22
  align-items: center
  display: flex
  flex-direction: column
  gap: 8px
  justify-content: center
  margin-left: -2.00px
  margin-right: -2.00px
  position: relative
  width: 336px

.container-23
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-29
  align-self: stretch
  color: $black
  font-weight: 600
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center

.list-14
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 100%

.row-5
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  position: relative
  width: 100%

.card-4
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

.image-container-14
  align-items: flex-start
  align-self: stretch
  display: flex
  height: 240px
  position: relative
  width: 100%

.image-11
  align-self: stretch
  background-color: $iron
  flex: 1
  flex-grow: 1
  position: relative

.overlap-group-2
  height: 240px
  left: -15px
  position: relative
  width: 571px

.title-30
  height: 16px
  left: 0
  letter-spacing: 0
  line-height: 16px
  position: absolute
  text-align: center
  top: 111px
  transform: rotate(180deg)
  white-space: nowrap
  width: 366px

.s-obrazem-1
  height: 240px
  left: 15px
  object-fit: cover
  position: absolute
  top: 0
  width: 556px

.text-content-3
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

.list-15
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 8px
  justify-content: center
  padding: 8px 0px
  position: relative
  width: 100%

.row-6
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 8px
  justify-content: center
  padding: 0px 20px
  position: relative

.article
  align-items: flex-start
  align-self: stretch
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 0 0 auto
  gap: 16px
  justify-content: center
  padding: 16px
  position: relative
  width: 100%

.footer-8
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  height: 240px
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 100%

.component-1-9
  border-radius: 5px
  height: 240px
  margin-bottom: -20.00px
  margin-top: -20.00px
  overflow: hidden
  position: relative
  width: 131px

.button-container-18
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
