<template>
  <b-container fluid>
      <b-nav justified tabs>
        <b-nav-item @click="setFilter('people')">People</b-nav-item>
        <b-nav-item @click="setFilter('job')">Jobs</b-nav-item>
        <b-nav-item @click="setFilter('company')">Companies</b-nav-item>
        <b-nav-item>Groups</b-nav-item>
        <b-nav-item>Schools</b-nav-item>
     </b-nav>
      <b-form-input v-model="searchInput" type="text" placeholder="Search"></b-form-input>
      <hr>
      <!-- <b-card no-body>
          <b-list-group flush>
              <b-list-group-item>
                  <search-list-user-item url="https://lorempixel.com/125/125/technics/8/" title="A. Hutchinson" slug="I like waffles" occupation="Student"></search-list-user-item>
              </b-list-group-item>
              <b-list-group-item>
                  <search-list-user-item url="https://lorempixel.com/125/125/technics/8/" title="Ola Lowe" slug="I like stuff" occupation="Designer"></search-list-user-item>
              </b-list-group-item>
              <b-list-group-item>Filler Content</b-list-group-item>
              <b-list-group-item>Filler Content</b-list-group-item>
              <b-list-group-item>Filler Content</b-list-group-item>
              <b-list-group-item>
                  <b-container fluid class="text-center">
                      <b-pagination-nav :link-gen="linkGen" :number-of-pages="15" v-model="currentPage" />
                  </b-container>
              </b-list-group-item>
          </b-list-group>
      </b-card> -->
      <b-container class="listings-container text-left" fluid>
        <p class="text-muted m-3 mb-5 ml-4">Showing {{ this.results }} results:</p>
        <b-container id="listing-container" fluid>
          <search-list-job-item
          v-if="searchType === 'job'" 
          v-for="(item, index) in this.jobs"
          :key="item.id"
          :route="'/company/job/' + item.id"
          :divider="true" 
          :logo="item.image" 
          :title="item.title" 
          :company="item.company" 
          :location="item.location" 
          :description="item.desc"
          ></search-list-job-item>
        </b-container>
      </b-container>
  </b-container>
</template>

<script>
import SearchListUserItem from '@/components/search/SearchListUserItem.vue'
import SearchListJobItem from '@/components/search/SearchListJobItem.vue'

export default {
  data () {
    return {
      results: 0,
      searchInput: '',
      tabs: [{}],
      currentPage: 1,
      searchType: 'job'
    }
  },
  methods: {
    setFilter: function (type) {
      this.searchType = type
    }
  },
  components: {
    SearchListUserItem,
    SearchListJobItem
  },
  computed: {
    jobs: function () {
      const arr = this.$store.getters.occupations
      this.results = arr.length
      return arr
    }
  }
}
</script>

<style>
.listings-container {
  border: 1px rgb(225, 225, 225) solid;
  font-family: "Roboto", sans-serif;
}
</style>
