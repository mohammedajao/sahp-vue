<template>
  <b-container class="mt-3" fluid v-show="this.$store.getters.isUserOnline">
      <b-container>
          <b-container class="border-light text-left p-3 has-shadow mb-3" fluid>
            <b-row class="mb-2">
                <b-col class="pr-0 text-left">
                  <b-row class="pl-3">
                    <b-img width="75px" height="75px" class="company-logo"></b-img>
                    <b-col class="d-inline-block">
                     <h3>{{ title }}</h3>
                    <h6 class="text-muted"><span class="company-name"></span><span class="job-location">{{ location }}</span></h6>
                    </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-button variant="primary" @click="apply" v-if="this.canApply">Apply Online</b-button>
            <b-button v-if="!this.canApply" disabled>Awaiting Response</b-button>
          </b-container>
          <b-container class="border-light text-left p-3 has-shadow mb-3">
              <b-row class="job-description">
                  <b-col>
                    <h6><strong>Job description</strong></h6>
                    <p>{{ desc }}</p>
                    <h6><strong>Responsibilities</strong></h6>
                    <ul>
                        <li v-for="item in responsibilities" :key="item.index">{{ item.text }}</li>
                    </ul>
                    <h6><strong>Qualifications</strong></h6>
                    <ul>
                        <li v-for="item in qualifications" :key="item.index">{{ item.text }}</li>
                    </ul>
                  </b-col>
                  <b-col md="2">
                      <dt>Seniority Level</dt>
                      <dd>{{ seniority }}</dd>
                      <dt>Industry</dt>
                      <dd>{{ industry }}</dd>
                      <dt>Employment Type</dt>
                      <dd>{{ type }}</dd>
                  </b-col>
              </b-row>
          </b-container>
      </b-container>
  </b-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['id'],
  methods: {
    apply () {
      this.$store.dispatch('addUserJob', {jobs: [this.id]})
    }
  },
  computed: {
    job: function () {
      const info = this.$store.getters.loadJob(this.id)
      Object.keys(info).map(prop => {
        this[prop] = info[prop]
      })
      console.log(this)
      return info
    },
    user: function () {
      return this.$store.getters.loadUser
    },
    canApply: function () {
      return !this.$store.getters.getUser.jobs.find(job => this.id === job)
    }
  },
  created: function () {
    console.log(this.job)
  }
}
</script>

<style>
.has-shadow {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.2);
}

.border-light {
  border: 1px rgb(225, 225, 225) solid;
}
</style>
