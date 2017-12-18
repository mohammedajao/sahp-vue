<template>
  <b-container fluid v-show="this.$store.getters.isUserOnline">
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
          v-for="(item, index) in this.sortedJobs"
          :key="index"
          :route="'/company/job/' + item.id"
          :divider="true" 
          :logo="item.image" 
          :title="item.title" 
          :company="item.company" 
          :location="item.location" 
          :description="item.desc"
          ></search-list-job-item>
        </b-container>
        <b-container id="listing-container" fluid>
          <search-list-user-item v-if="searchType === 'people'"
          v-for="(item, index) in this.sortedUsers"
          :key="index"
          :title="item.name"
          :route="'/profile/' + item.id"
          :url="item.photoURL"
          :occupation="item.occupation"
          :slug="item.slug"
          :divider="true"
          ></search-list-user-item>
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
    },
    sortedJobs: function () {
      const arr = this.$store.getters.occupations
      arr.filter(job => {
        if (this.searchInput && this.searchInput != '') {
          return job.title.toUpperCase().indexOf(this.searchInput.toUpperCase()) > -1
        } else {
          return true
        }
      })
      this.results = arr.length
      return arr
    },
    sortedUsers: function () {
       const arr = this.$store.getters.userList
       arr.filter(account => {
        if ( this.searchInput && this.searchInput != '') {
          return account.name.toUpperCase().indexOf(this.searchInput.toUpperCase()) > -1
        } else {
          return true
        }
      })
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
