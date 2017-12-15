<template>
  <div id="app">
    <page-header />
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

// Type firebase initialization here

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli|Montserrat|Open+Sans|Raleway|Raleway+Dots|Roboto|Quicksand');

/* font-family: 'Muli', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Raleway Dots', cursive;
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif; */

#app {
  text-align: center;
  font-family: 'Raleway', sans-serif;
  height: 100vh;
}
</style>
