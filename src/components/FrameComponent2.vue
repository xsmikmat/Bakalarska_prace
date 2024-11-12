<template>
  <div :class="$style.frameWrapper">
    <div :class="$style.image1Parent">
      <img
        :class="$style.image1Icon"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <div :class="$style.reservationButtonsParent">
        <div :class="$style.reservationButtons">
          <div :class="$style.button" @click="onButtonContainerClick">
            <h1 :class="$style.rezervovat">Rezervovat</h1>
          </div>
          <div :class="$style.image2Wrapper">
            <img
              :class="$style.image2Icon"
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
        </div>
        <div :class="$style.button1" @click="onButtonContainerClick1">
          <div :class="$style.kontakt">Kontakt</div>
        </div>
      </div>
      <img
        :class="$style.image3Icon"
        loading="lazy"
        alt=""
        src="/image-3@2x.png"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent2",
    methods: {
      onButtonContainerClick() {
        this.$router.push("/rezervace-mc14");
      },
      onButtonContainerClick1() {
        this.$router.push("/kontakt-mc14");
      },
    },
  });
</script>
<style module>
  .image1Icon {
    width: 444px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
  }
  .rezervovat {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 44px;
    font-weight: 400;
    font-family: inherit;
  }
  .button {
    height: 64px;
    margin: 0 !important;
    position: absolute;
    top: -1px;
    left: -11px;
    border-radius: var(--br-3xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-3xl) var(--padding-5xs)
      var(--padding-6xl);
    cursor: pointer;
  }
  .image2Icon {
    align-self: stretch;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .image2Wrapper {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-73xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .reservationButtons {
    height: 342px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 106%;
  }
  .kontakt {
    flex: 1;
    position: relative;
    line-height: 44px;
  }
  .button1 {
    width: 222px;
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-5xl) var(--padding-3xs)
      var(--padding-6xl);
    box-sizing: border-box;
    cursor: pointer;
    margin-left: -248px;
    text-align: center;
    color: var(--color-darkseagreen);
  }
  .reservationButtonsParent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xl) 0px 0px;
    box-sizing: border-box;
    min-width: 308px;
    max-width: 100%;
  }
  .image3Icon {
    width: 406px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
  }
  .image1Parent {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-end;
    padding: var(--padding-12xs) var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-4xl);
    max-width: 100%;
  }
  .frameWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    text-align: left;
    font-size: var(--m3-headline-large-size);
    color: var(--color-seagreen);
    font-family: var(--heading-2);
  }

  @media screen and (max-width: 1050px) {
    .rezervovat {
      font-size: var(--font-size-7xl);
      line-height: 35px;
    }

    .kontakt {
      font-size: var(--font-size-7xl);
      line-height: 35px;
    }
  }
  @media screen and (max-width: 450px) {
    .rezervovat {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .kontakt {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }
  }
</style>
