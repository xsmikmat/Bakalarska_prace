<template>
  <div class="list-4">
    <div class="card-3">
      <div class="image-container-5">
        <img class="spolecne-prsotory-02-1-2" :src="spolecnePrsotory021" alt="Spolecne prsotory 02 1" />
      </div>
      <div class="text-content-2">
        <div class="title-14 heading-2">{{ title }}</div>
        <p class="subtitle-2 valign-text-middle text">
          &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["spolecnePrsotory021", "title"],
};
</script>

<style lang="sass">
@import '../../variables'

.list-4
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 40px
  justify-content: center
  margin-top: -6.50px
  position: relative

.card-3
  align-items: center
  align-self: stretch
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex-direction: column
  height: 556px
  overflow: hidden
  position: relative
  width: 100%

.image-container-5
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 1
  flex-grow: 1
  position: relative
  width: 100%

.spolecne-prsotory-02-1-2,
.spolecne-prsotory-03-1-1,
.okoli-07-1-1
  height: 340px
  object-fit: cover
  position: relative
  width: 406px

.text-content-2
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 4px
  padding: 12px
  position: relative
  width: 100%

.title-14
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative

.subtitle-2
  align-self: stretch
  color: $gray
  font-weight: 400
  height: 144px
  line-height: 15px
  position: relative
</style>
