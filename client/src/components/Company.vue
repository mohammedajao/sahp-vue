<template>
<div class="h-100" v-show="this.$store.getters.isUserOnline">
  <b-jumbotron class="company-wallpaper h-25 pb-0 mb-0"></b-jumbotron>
  <b-container class="text-center">
      <b-container class="mb-3 comp-container">
          <b-container class="border-light text-left p-3 has-shadow mb-3" fluid>
            <b-row class="mb-2">
                <b-col class="pr-0">
                    <b-row class="pl-3">
                    <b-img width="75px" height="75px" class="company-logo"></b-img>
                    <b-col>
                    <h3>Google</h3>
                    <h6 class="text-muted"><span class="company-name"></span><span class="job-location">San Bruno, CA, US</span></h6>
                    </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-button variant="outline-primary">Follow</b-button>
            <b-button variant="primary">Website</b-button>
          </b-container>
          <b-container class="border-light text-left p-3 has-shadow mb-3">
              <b-row class="job-description">
                  <b-col>
                    <h6><strong>Job description</strong></h6>
                    <p>Post stuff here.</p>
                    <h6><strong>Responsibilities</strong></h6>
                    <ul>
                        <li></li>
                    </ul>
                    <h6><strong>Qualifications</strong></h6>
                    <ul>
                        <li></li>
                    </ul>
                  </b-col>
                  <b-col md="2">
                      <dt>Seniority Level</dt>
                      <dd>N/A</dd>
                      <dt>Industry</dt>
                      <dd>Information Techology, Internet</dd>
                      <dt>Employment Type</dt>
                      <dd>Part-time</dd>
                  </b-col>
              </b-row>
          </b-container>
          <hr>
      </b-container>
  </b-container>
</div>
</template>

<script>
export default {

}
</script>

<style>

.comp-container {
    margin-top: -60px;
}

.has-shadow {
    box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2), 0 0 0 1px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);

}

.border-light {
    border: 1px rgb(225, 225, 225) solid;
    background-color: white;
}
.company-name-styled h1 {
    position: absolute;
    bottom: 0;
    left: 0;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 300;
    font-size: 72px;
    font-size: 8em;
    font-family: 'Roboto', sans-serif;
}

.company-wallpaper { 
    background-image: url('https://wallpapers.walldevil.com/wallpapers/a28/preview/robert-downey-actors-wallpaper-grayscale-men-people-wallpapers.jpg');
    background-size: cover;
    background-position: 50%, 50%;
    background-attachment: fixed;
}

@media screen and (max-width: 899px) {
    .company-name-styled {
        font-size: 1vh;
    }
}
</style>
