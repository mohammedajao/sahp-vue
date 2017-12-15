<template>
  <b-container fluid>
      <b-nav justified tabs>
        <b-nav-item>People</b-nav-item>
        <b-nav-item>Jobs</b-nav-item>
        <b-nav-item>Companies</b-nav-item>
        <b-nav-item>Groups</b-nav-item>
        <b-nav-item>Schools</b-nav-item>
     </b-nav>
      <b-form-input v-model="searchInput" type="text" placeholder="Search"></b-form-input>
      <hr>
      <b-card no-body>
          <b-list-group flush>
              <b-list-group-item>
                  <b-container fluid>
                    <b-col md="6" class="d-inline-block float-left">
                    <b-img left src="https://lorempixel.com/125/125/technics/8/" rounded="circle" blank-color="#777" width="75" height="75" class="m-1" />
                    <b-row>
                        <b-link class="float-left user-title-name">A. Hutson</b-link>
                    </b-row>
                    <b-row>
                        <p class="float-left user-title-occupational">Student</p>
                    </b-row>
                    <b-row>
                        <p class="user-title-slug">I love waffles</p>
                    </b-row>
                    </b-col>
                    <b-col md="6" class="d-inline-block float-right h-100">
                    <b-button size="md" variant="outline-primary" class="float-right">Connect</b-button>
                    </b-col>
                  </b-container>
              </b-list-group-item>
              <b-list-group-item>Filler Content</b-list-group-item>
              <b-list-group-item>Filler Content</b-list-group-item>
              <b-list-group-item>Filler Content</b-list-group-item>
              <b-list-group-item>Filler Content</b-list-group-item>
              <b-list-group-item>
                  <b-container fluid class="text-center">
                      <b-pagination-nav :link-gen="linkGen" :number-of-pages="15" v-model="currentPage" />
                  </b-container>
              </b-list-group-item>
          </b-list-group>
      </b-card>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      searchInput: '',
      tabs: [{}],
      currentPage: 1
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#page/' + this.currentPage
    }
  }
}
</script>

<style>

</style>
