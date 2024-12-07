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
    <div class="list-okoli">
      <div class="heading-1">Doporučené aktivity</div>
      <div class="row-icons">
        <button class="item-9"  @click="filterActivities('pesky')">
          <div class="frame">
            <img
                class="icon-okoli"
                src="../../img/icon-for-tourism-1.png"
                alt="icon-for-tourism"/>
          </div>
          <div class="title-48 roboto-bold-black-20px">Pro turisty</div>
          <div class="subtitle-13 roboto-normal-black-16px-2">aktivity v dochozí vzdálenosti</div>
        </button>
        <button class="item-9"  @click="filterActivities('cyklo')">
          <div class="frame">
            <img
                class="icon-okoli"
                src="../../img/icon-for-cycling-1.png"
                alt="icon-for-cycling"/>
          </div>

          <div class="title-48 roboto-bold-black-20px">Pro cyklisty</div>
          <div class="subtitle-13 roboto-normal-black-16px-2">Delší vzdálenost pro hezké projížďky</div>
        </button>
        <button class="item-9"  @click="filterActivities('voda')">
          <div class="frame">
            <img
                class="icon-okoli"
                src="../../img/icon-for-swimmers-and-boaters-in-nature-1.png"
                alt="icon-for-swimmers"/>
          </div>
          <div class="title-48 roboto-bold-black-20px">Pro plavce a vodáky</div>
          <div class="subtitle-13 roboto-normal-black-16px-2">Zábava do vody ne jen pro děti</div>
        </button>
      </div>
      <div class="row-okoli">
        <div class="card-okoli" v-for="activity in filteredActivities" :key="activity.nazev">
          <div class="image-container-30">
            <img class="image-15" :src="`../../img/${activity.obrazek}`" :alt="activity.nazev"/>
          </div>
          <div class="text-content-6">
            <div class="subtext">{{ activity.nazev }}</div>
            <p class="text">{{ activity.popis }}</p>
          </div>
        </div>
      </div>
    </div>
    <footer-final/>
  </div>

</template>

<script>
import Navigace_final from "@/components/navigace_final.vue";
import FooterFinal from "@/components/footer_final.vue";
import OkoliData from "../data/okoli.json";
export default {
  name: "Okoli",
  components: {
    FooterFinal,
    Navigace_final,
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
  data() {
    return {
      activities: [],
      filteredActivities: [],
    };
  },
  created() {
          this.activities = OkoliData;
          this.filteredActivities= this.activities;
  },
  methods: {
    filterActivities(type) {
      this.filteredActivities = this.activities.filter(activity => activity.typ.includes(type));
      console.log(this.filteredActivities);
    }
  }
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

.list-okoli
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

.row-icons
  align-items: flex-start
  display: flex
  flex: 0 0 auto
  gap: 40px
  position: relative
  width: 50%

.card-okoli
  align-items: center
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex-direction: column
  position: relative
  flex: 1 1 calc(33.333% - 40px)
  max-width: calc(33.333% - 40px)

.row-okoli
  align-items: flex-start
  justify-content: center
  display: flex
  gap: 40px
  position: relative
  width: 100%
  height: fit-content
  flex-wrap: wrap

.item-9
  align-items: center
  border: none
  background-color: white
  display: flex
  flex: 1
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative

.item-9:hover
  background-color: $black-3

.frame
  background-color: $black-3
  border-radius: 50px
  height: 100px
  position: relative
  width: 100px

.icon-okoli
  height: 116px
  left: -8px
  object-fit: cover
  position: absolute
  top: -8px
  width: 116px
  border-radius: 50px



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
  position: relative

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
