<template>
  <div class="list-19-item">
    <div class="article-6">
      <div class="image-container-29">
        <div class="image-14"><img class="spolecne-prsotory-04-1-4" src="" alt="Spolecne prsotory 04 1" /></div>
      </div>
      <div class="frame-427318906-10">
        <div class="title-45 subtext">Zvůle</div>
        <p class="subtitle-12 text">
          Velký písčitý rybník ve tvaru písmene V, obklopený lesem, s množstvím bludných balvanů ideálních na
          opalování u stejnojmenné vesnice Zvůle, od chalupy vzdálen vzdušnou čarou 900m. Ideální pro pěší výlet.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Row",
};
</script>

<style lang="sass">
@import '../../variables'

.list-19-item
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 100%

.article-6
  align-items: center
  align-self: stretch
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 0 0 auto
  gap: 16px
  padding: 16px 20px
  position: relative
  width: 100%

.image-container-29
  align-items: center
  display: flex
  height: 160px
  position: relative
  width: 149px

.image-14
  align-self: stretch
  background-color: $iron
  flex: 1
  flex-grow: 1
  position: relative

.spolecne-prsotory-04-1-4
  height: 160px
  left: 0
  object-fit: cover
  position: absolute
  top: 0
  width: 149px

.frame-427318906-10
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 8px
  position: relative

.title-45
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  margin-top: -1.00px
  position: relative

.subtitle-12
  -webkit-box-orient: vertical
  -webkit-line-clamp: 11
  align-self: stretch
  color: $black
  display: -webkit-box
  font-weight: 400
  height: 168px
  line-height: 15px
  overflow: hidden
  position: relative
  text-overflow: ellipsis
</style>
