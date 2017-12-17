<template>
<b-container fluid>
          <b-row>
            <b-col>
              <b-img width="75" height="75" :src="logo"></b-img>
            </b-col>
            <b-col md="10" lg="11">
              <h3 class="mb-0"><b-link :to="route"><strong>{{ title }}</strong></b-link></h3>
              <h5 class="mb-0">{{ company }}</h5>
              <h6 class="text-muted">{{ location }}</h6>
              <p>{{ description }}</p>
              <hr v-if="divider">
            </b-col>
          </b-row>
        </b-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    logo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    divider: Boolean
  }
}
</script>

<style>

</style>
