<template>
  <b-row>
    <b-col sm="6" class="text-left">
      <b-col>
        <b-img left :src="url" rounded="circle" blank-color="#777" width="75" height="75" class="mb-3 mr-2" />
      </b-col>
      <b-col cols="12" class="mt-1"><b-link :to="route"><h5 class="mb-0"><strong>{{ title }}</strong></h5></b-link></b-col>
      <b-col cols="12"><h6 class="mb-0">{{ occupation }}</h6></b-col>
      <b-col cols="12"><p style="font-size: 12px; opacity: .65;">{{ slug }}</p></b-col>
    </b-col>
    <b-col sm="6" align-self="center" class="text-right">
     <b-button variant="outline-primary" size="md" :to="route">Connect</b-button>
    </b-col>
    <b-container class="mr-0 pl-0">
      <hr v-if="divider">
    </b-container>
  </b-row>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    },
    slug: String,
    divider: Boolean,
    route: String,
  }
}
</script>

<style>

</style>
