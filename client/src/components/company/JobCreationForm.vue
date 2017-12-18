<template>
  <div v-show="this.$store.getters.isUserOnline && this.$store.getters.loadUser.accountType != 'Student'">
    <b-container>
      <b-card class="text-left mt-3">
        <b-form @submit.prevent="submission">
          <b-form-input v-model="file" placeholder="Enter a file url for a logo"></b-form-input>
          <b-img :src="file" width="75" class="m-3"></b-img>
          <!-- <b-form-file id="file_input" v-model="file" choose-label="Attachment Logo"></b-form-file> -->
          <b-form-group 
            :label-cols="6"
            breakpoint="sm"
            label="Enter the job's name."
            label-for="jobName"
            :state="isNameValid"
            :invalid-feedback="invalidName"
            description="We recommend you put text such as '{Job Name}, {HS or College}'"
            class="">
            <b-form-input :required="true" id="jobName" v-model.trim="title"></b-form-input>
          </b-form-group>
          <b-row>
            <b-col md="6">
              <b-form-group
                breakpoint="sm"
                label="Location"
                label-for="location"
                class="">
                <b-form-input :required="true" placeholder="280 Peasant Ave, NYC, NY" id="location" v-model.trim="location"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                breakpoint="sm"
                label="Company"
                :state="isCompanyValid"
                :invalid-feedback="invalidFeedback"
                label-for="company"
                class="">
                <b-form-input v-model="company" :required="true" placeholder="SpaceX" id="company"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group
                breakpoint="sm"
                label="Seniority"
                label-for="seniority"
                :state="isSeniorityValid"
                :invalid-feedback="invalidFeedback"
                class="">
                <b-form-input v-model="seniority" placeholder="Entry Level" id="seniority"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                breakpoint="sm"
                label="Industry"
                :state="isIndustryValid"
                :invalid-feedback="invalidFeedback"
                label-for="industry"
                class="">
                <b-form-input v-model="industry" :required="true" placeholder="Information Technology" id="industry"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group
                breakpoint="sm"
                label="Employment Type"
                :state="isEmploymentValid"
                :invalid-feedback="invalidFeedback"
                label-for="employment-type"
                class="">
                <b-form-select :required="true" id="employment-type" class="mb-3" v-model="employmentType">
                  <option :value="null" disabled>Please select an option</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Intern">Internship</option>
                  <option value="Paid-Internhip">Paid Internhip</option>
                  <option value="Full-time">Full-time</option>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                breakpoint="sm"
                label="Deadline"
                label-for="deadline"
                class="">
                <b-form-input v-model="deadline" type="date" id="deadline"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-textarea id="textarea"
                     v-model="description"
                     placeholder="Job description"
                     :rows="3"
                     :state="isDescValid"
                     :invalid-feedback="invalidDesc"
                     :required="true"
                     class="mb-3"
                     :max-rows="7">
          </b-form-textarea>
          <pre class="mt-3 mb-3">{{ description }}</pre>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      description: '',
      company: '',
      employmentType: null,
      seniority: '',
      date: '',
      deadline: '',
      industry: '',
      file: '',
      responsibilities: [],
      qualifications: []
    }
  },
  methods: {
    submission: function () {
      console.log(this.deadline)
      const bool = this.isNameValid && this.isDescValid && this.isCompanyValid && this.isEmploymentValid && this.isIndustryValid && this.isSeniorityValid
      if (bool) {
        const data = {
          title: this.title,
          location: this.location,
          desc: this.description,
          company: this.company,
          type: this.employmentType,
          seniority: this.seniority,
          industry: this.industry,
          deadline: this.deadline,
          image: this.file,
          date: new Date(),
          responsibilities: this.responsibilities,
          qualifications: this.qualifications
        }
        this.$store.dispatch('createJob', data)
      }
    }
  },
  computed: {
    isNameValid: function () { return this.title.length > 10 },
    isDescValid: function () { return this.description.length > 50 },
    isCompanyValid: function () { return this.company.length > 3 },
    isEmploymentValid: function () { return this.employmentType != null },
    isIndustryValid: function () { return this.industry.length > 5 },
    isSeniorityValid: function () { return this.seniority.length > 3 },
    invalidName: function () {
      if (this.title.length > 10) {
        return ''
      } else if (this.title.length > 0) {
        return 'Please enter at least 10 characters'
      } else {
        return 'This field is required.'
      }
    },
    invalidDesc: function () {
      if (this.description.length > 50) {
        return ''
      } else if (this.title.length > 0) {
        return 'Please enter a description of at least 50 characters'
      } else {
        return 'This field is required.'
      }
    },
    invalidFeedback: function () { return 'Please fill this field.' }
  }
}
</script>

<style>

</style>
