<template>
  <div class="screen">
    <navigace_final/>
    <form class="form-container" @submit.prevent="SubmitForm()">
      <div class="field">
        <input id="date-input" class="input-text m3bodylarge" :type="arriveInputType" required
               placeholder="Den příjezdu"
               @focus="handleFocus('arrive')" @blur="handleBlur('arrive')" v-model="formValues.arrive"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input id="date-input" class="input-text m3bodylarge" :type="departInputType" required
               placeholder="Den odjezdu"
               @focus="handleFocus('depart')" @blur="handleBlur('depart')" v-model="formValues.depart"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Jméno" type="text" required v-model="formValues.name"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Příjmení" type="text" required v-model="formValues.surname"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Ulice" type="text" required v-model="formValues.street"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Číslo popisné" type="number" required v-model="formValues.streetNumber"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Město" type="text" required v-model="formValues.city"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="PSČ" type="text" required v-model="formValues.zip"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Email" type="email" required v-model="formValues.email"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Telefon" type="tel" required v-model="formValues.phone"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Poznámka" type="text" v-model="formValues.note"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <button type="submit" class="component-1-variant6">
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
      arriveInputType: "text",
      departInputType: "text",
      formValues: {
        arrive: "",
        depart: "",
        name: "",
        surname: "",
        street: "",
        streetNumber: "",
        city: "",
        zip: "",
        email: "",
        phone: "",
        note: "",
      }
    };
  },
  props: [
    "component1Variant6Props",
  ],
  methods: {
    handleFocus(inputType) {
      if (inputType === "arrive") {
        this.arriveInputType = "date";
      }
      if (inputType === "depart") {
        this.departInputType = "date";
      }
    },
    handleBlur(inputType) {
      if (inputType === "arrive") {
        this.arriveInputType = "text";
      }
      if (inputType === "depart") {
        this.departInputType = "text";
      }
    },


    SubmitForm() {
      console.log(this.formValues);
      alert('Form submitted successfully!');
      this.$router.push('/');
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
