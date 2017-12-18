<template>
  <div>
  <b-jumbotron class="h-100">
    <template slot="header">
      Bootstrap Vue
    </template>
    <template slot="lead">
      This is a simple hero unit, a simple jumbotron-style component for
      calling extra attention to featured content or information.
    </template>
    <hr class="my-4">
    <p>
      It uses utility classes for typography and spacing to space content
      out within the larger container.
    </p>
    <b-btn variant="primary" to="/register" v-if="!this.$store.getters.isUserOnline">Register</b-btn>
  </b-jumbotron>

  <!-- jumbotron-2.vue -->
  <h1 class="page-header">Featured Jobs</h1>
  <b-container id="featured-jobs" fluid>
    <b-row align-v="center" align-h="center" class="text-center">
      <b-col>
        <b-card img-src="https://lorempixel.com/600/300/food/5/" img-alt="Image" img-top="">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-link>Click me</b-link>
        </b-card>
      </b-col>
      <b-col>
        <b-card img-src="https://lorempixel.com/600/300/food/5/" img-alt="Image" img-top="">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-link>Click me</b-link>
        </b-card>
      </b-col>
      <b-col>
        <b-card img-src="https://lorempixel.com/600/300/food/5/" img-alt="Image" img-top="">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-link>Click me</b-link>
        </b-card>
      </b-col>
    </b-row>
  </b-container>

</div>
</template>

<script>
export default {
  computed: {
    fetchFeaturedJobs: function () {
      return this.$store.getters.featuredJobs
    }
  },
  methods: {
    onLoadJobs (id) {
      this.$router.push('/jobs/' + id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
