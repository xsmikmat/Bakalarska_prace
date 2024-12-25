<template>
  <div :class="[`frame`, className || ``]"><img class="icon-for" :src="src" alt="icon-for-email 1" /></div>
</template>

<script>
export default {
  name: "Frame",
  props: ["src", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

</style>
