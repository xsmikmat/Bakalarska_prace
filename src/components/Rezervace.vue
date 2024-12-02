<template>
  <div class="screen">
    <navigace_final />
    <form class="form-container">
      <div class="field">
        <input id="date-input" class="input-text m3bodylarge" type="date" required :placeholder="placeholder2" @focus="placeholder2 = ''" @blur="placeholder2 = 'Den příjezdu'" />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input id="date-input" class="input-text m3bodylarge" type="date" required :placeholder="placeholder2" @focus="placeholder2 = ''" @blur="placeholder2 = 'Den odjezdu'" />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Jméno" type="text" required />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Příjmení" type="text" required />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Ulice" type="text" required />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Číslo popisné" type="number" required />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Město" type="text" required />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="PSČ" type="text" required />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Email" type="email" required />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Telefon" type="tel" required />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Poznámka" type="text" required />
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <button type="submit" class="component-1-variant6" @click="SubmitForm('form1')">
        Potvrdit
      </button>
    </form>
  </div>
</template>

<script>
import Navigace_final from "@/components/navigace_final.vue";
export default {
  name: "Rezervace",
  components: {
    Navigace_final,
  },
  data() {
    return {
      placeholder1: "Den příjezdu",
      placeholder2: "Den odjezdu",
    };
  },
  props: [
    "component1Variant6Props",
  ],
  methods: {
    SubmitForm(formName) {
      const form = document.forms[formName];
      const formData = new FormData(form);
      const formEntries = {};
      for (let [key, value] of formData.entries()) {
        formEntries[key] = value;
      }
      console.log(formEntries);
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'

.field
  align-items: flex-start
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $fun-green
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  height: 49px
  margin-top: -1.00px
  position: relative
  flex: 1
  padding: 4px 0px 4px 16px
  width: 50%

.input-text
  background-color: transparent
  border: 0
  color: $eerie-black
  flex: 0 0 auto
  font-weight: 400
  line-height: 24px
  margin-top: -1.00px
  padding: 0
  position: relative
  white-space: nowrap
  width: 100%

.form-container
  align-items: center
  display: flex
  flex-direction: column
  gap: 53px
  padding: 20px
  position: relative
  width: 100%
  justify-content: center

.supporting-text
  align-items: flex-start
  display: flex
  gap: 10px
  height: 20px
  left: 0
  padding: 4px 16px 0px
  position: absolute
  top: 47px

.component-1-variant6
  align-items: center
  background-color: $fun-green
  border: 0
  color: white
  font-weight: bold
  border-radius: 10px
  cursor: pointer
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  height: 40px
  justify-content: center
  overflow: hidden
  padding: 20px
  position: relative

</style>
