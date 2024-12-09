<template>
  <div class="screen">
    <navigace_final/>
    <form class="form-container" @submit.prevent="SubmitForm()">
      <div class="date-field">
        <DatePicker ref="datePicker" v-model="formValues.oddo"
                    :disabled-dates="data" selectionMode="range" inputId="in_label" class="date-input" @change="handleDateChange"/>
        <label for="in_label" class="input-text m3bodylarge">Datum pobytu</label>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Příjmení" type="text" required
               v-model="formValues.prijmeni"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Email" type="email" required
               v-model="formValues.email"/>
        <div class="supporting-text m3bodysmall"> Povinné pole</div>
      </div>
      <div class="field">
        <input class="input-text m3bodylarge" name="inputtext" placeholder="Telefon" type="tel" required
               v-model="formValues.telefon"/>
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
import DatePicker from 'primevue/datepicker';
import {ref} from "vue";

export default {
  name: "Rezervace",
  setup() {
    //const data = ref({})
    const data= ['2024-12-09', '2024-12-10'].map(dateStr => new Date(dateStr));
    return {
      data
    }
  },
  components: {
    Navigace_final,
    DatePicker
  },
  data() {
    return {
      arriveInputType: "text",
      departInputType: "text",
      formValues: {
        oddo: [],
        prijmeni: "",
        email: "",
        telefon: "",
      },
    };
  },
  props: [
    "component1Variant6Props",
  ],
  async created() {
    await fetch("http://127.0.0.1:8000/rezervace", {
      method: 'GET'
    })
        .then(async (response) => {
          const data = await response.json()
          console.log("Original data", data);
          /*const data = await response.json();
          console.log("Original data", data);
          const allDates = [];

          data.forEach(range => {
            const [startDate, endDate] = range.map(date => new Date(date)); // Convert to Date objects
            let currentDate = new Date(startDate);

            while (currentDate <= endDate) {
              allDates.push(new Date(currentDate)); // Add the current date
              currentDate.setDate(currentDate.getDate() + 1); // Increment the day
            }
          });

          console.log("All dates", allDates);
          this.data = allDates; // Ensure this is an array of Date objects*/
        })
        .catch((error) => {
          console.log(error)
          return error
        })
  },
  methods: {
  handleDateChange() {
    if (this.formValues.oddo.length === 1) {
      console.log("Selected date range:", this.formValues.oddo);
      this.$refs.datePicker.$el.hideOverlay();
    }},
    async SubmitForm() {
      console.log(JSON.stringify(this.formValues))
      await fetch(`http://127.0.0.1:8000/rezervace?od=${this.formValues.od}&do=${this.formValues.do}&prijmeni=${this.formValues.prijmeni}&email=${this.formValues.email}&telefon=${this.formValues.telefon}`, {
        method: 'POST'
      })
          .then(async (response) => {
            const data = await response.json()
            console.log("data", data);
            alert('Form submitted successfully!');
            this.$router.push('/');
          })
          .catch((error) => {
            console.log(error)
            alert('Form submitted not successfully!');
            return error
          })
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'

.date-field
  background-color: white
  border-bottom: 1px solid $fun-green
  display: flex
  flex-direction: column
  align-items: center
  width: 50%
.date-input
  padding: 8px
  width: 100%
  box-sizing: border-box
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
