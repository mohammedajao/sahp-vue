<template>
<div class="h-100">
  <b-jumbotron class="company-wallpaper h-100 pb-0 mb-0">
    <div class="company-name-styled">
        <h1>Google</h1>
    </div>
  </b-jumbotron>
  <b-container class="text-center" fluid>
      <br>
      <h1>Hey, we're Google.</h1>
  </b-container>
</div>
</template>

<script>
export default {

}
</script>

<style>
.company-name-styled h1 {
    position: absolute;
    bottom: 0;
    left: 0;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 300;
    font-size: 72px;
    font-size: 8em;
    font-family: 'Raleway', sans-serif;
}

.company-wallpaper { 
    background-image: url('https://wallpapers.walldevil.com/wallpapers/a28/preview/robert-downey-actors-wallpaper-grayscale-men-people-wallpapers.jpg');
    background-size: cover;
    background-position: 50%, 50%;
}
</style>
