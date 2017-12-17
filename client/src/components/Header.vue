<template>
  <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">NavBar</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- We'll use Vuex to decide what to render -->

    <b-navbar-nav v-if="!this.$store.getters.isUserOnline">
      <b-nav-item v-for="link in menu" :key="link.id" :to="link.path">
        {{ link.title }}
      </b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form v-if="this.$store.getters.isUserOnline">
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-form v-if="!this.$store.getters.isUserOnline">
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Username"/>
        <b-form-input size="sm" class="mr-sm-2" type="password" placeholder="Password"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Login</b-button>
        <b-button size="sm" class="my-2 my-sm-0 ml-1" variant="success">Register</b-button>
      </b-nav-form>

      <b-nav-item-dropdown v-if="this.$store.getters.isUserOnline" right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {id: 1, title: 'Home', path: '/'},
        {id: 2, title: 'About', path: '/search'}
      ]
    }
  }
}
</script>

<style>

</style>
