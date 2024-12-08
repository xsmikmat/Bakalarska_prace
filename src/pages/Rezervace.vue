<template>
  <div class="screen">
    <navigace_final/>
    <form class="form-container" @submit.prevent="SubmitForm()">
      <div class="field">
        <date-picker id="date-input" class="input-text m3bodylarge"placeholder="Den příjezdu"
                     @focus="handleFocus('od')" @blur="handleBlur('od')" v-model="formValues.od"
                      :aria-disabled="data">

        </date-picker>
        <input id="date-input" class="input-text m3bodylarge" :type="arriveInputType" required
               placeholder="Den příjezdu"
               @focus="handleFocus('od')" @blur="handleBlur('od')" v-model="formValues.od"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input id="date-input" class="input-text m3bodylarge" :type="departInputType" required
               placeholder="Den odjezdu"
               @focus="handleFocus('do')" @blur="handleBlur('do')" v-model="formValues.do"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Příjmení" type="text" required v-model="formValues.prijmeni"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Email" type="email" required v-model="formValues.email"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Telefon" type="tel" required v-model="formValues.telefon"/>
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
import {ref} from "vue";

export default {
  name: "Rezervace",
  setup (){
    const data = ref({})
    return{
      data
    }
  },
  components: {
    Navigace_final,
  },
  data() {
    return {
      arriveInputType: "text",
      departInputType: "text",
      formValues: {
        od: "",
        do: "",
        prijmeni: "",
        email: "",
        telefon: "",
      },
    };
  },
  props: [
    "component1Variant6Props",
  ],
  async created (){
    await fetch ("http://127.0.0.1:8000/rezervace", {
      method: 'GET'
    })
        .then (async (response)=>{
          const data = await response.json ()
          console.log ("data",data);

          this.data=data;
        })
        .catch ((error)=>{
          console.log (error)
          return error})
  },
  methods: {
    handleFocus(inputType) {
      if (inputType === "od") {
        this.arriveInputType = "date";
      }
      if (inputType === "do") {
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
    async SubmitForm() {
      console.log(JSON.stringify(this.formValues))
      await fetch (`http://127.0.0.1:8000/rezervace?od=${this.formValues.od}&do=${this.formValues.do}&prijmeni=${this.formValues.prijmeni}&email=${this.formValues.email}&telefon=${this.formValues.telefon}`,{
        method:'POST'
      })
          .then (async (response)=>{
            const data = await response.json ()
            console.log ("data",data);
            alert('Form submitted successfully!');
            this.$router.push('/');
          })
          .catch ((error)=>{
            console.log (error)
            alert('Form submitted not successfully!');
            return error})
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
