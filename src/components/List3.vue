<template>
  <div class="list-33">
    <div class="card-10">
      <div class="image-container-34">
        <img class="spolecne-prsotory-02-1-3" :src="spolecnePrsotory021" alt="Spolecne prsotory 02 1" />
      </div>
      <div class="text-content-10">
        <div class="title-70 heading-2">{{ title }}</div>
        <p class="subtitle-23 valign-text-middle text">
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
  name: "List3",
  props: ["spolecnePrsotory021", "title"],
};
</script>

<style lang="sass">
@import '../../variables'

.list-33
  align-items: center
  display: flex
  flex: 1
  flex-grow: 1
  gap: 40px
  justify-content: center
  margin-top: -46.50px
  position: relative

.card-10
  align-items: center
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex-direction: column
  overflow: hidden
  position: relative
  width: 340px

.image-container-34
  align-items: flex-start
  align-self: stretch
  display: flex
  height: 340px
  position: relative
  width: 100%

.spolecne-prsotory-02-1-3,
.spolecne-prsotory-03-1-2,
.okoli-07-1-2
  height: 340px
  object-fit: cover
  position: relative
  width: 340px

.text-content-10
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 4px
  padding: 12px
  position: relative
  width: 100%

.title-70
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative

.subtitle-23
  align-self: stretch
  color: $gray
  font-weight: 400
  height: 144px
  line-height: 15px
  position: relative
</style>
