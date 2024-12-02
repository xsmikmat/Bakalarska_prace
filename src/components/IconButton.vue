<template>
    <div class="container-14">
      <div class="state-layer-16">
        <img
          class="icon"
          src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/icon.svg"
          alt="Icon"
        />
      </div>
    </div>
</template>

<script>
export default {
  name: "IconButton",
  props: ["className"],
};
</script>

<style lang="sass">
.icon-button-2
  align-items: center
  display: flex
  flex-direction: column
  gap: 10px
  height: 48px
  justify-content: center
  position: relative
  width: 48px

.container-14
  align-items: center
  border-radius: 100px
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  overflow: hidden
  position: relative

.state-layer-16
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  padding: 8px
  position: relative

.icon
  height: 24px
  position: relative
  width: 24px

.icon-button-2.trailing-icon-13
  margin-bottom: -9.00px
</style>
