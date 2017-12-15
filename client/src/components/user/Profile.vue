<template>
  <b-container class="profile-container" fluid>
    <b-row>
      <b-col md="12" lg="3" class="p-0-custom">
        <b-container class="card-avatar" id="card-avatar-custom" fluid>
          <div class="p-0-custom">
          <b-img rounded="circle" width="150" height="150" src="https://lorempixel.com/125/125/technics/8/" class="m-3"></b-img>
          <h3 class="profile-heading-bolden-caps m-2"><strong>Ola Lowe</strong></h3>
          <h6 class="text-muted-custom m-2">Student</h6>
          </div>
          <div class="profile-white">
            <b-button class="m-5" rounded>Download CV</b-button>
          </div>
        </b-container>
      </b-col>
      <b-col class="p-0-custom">
        <b-container class="profile-border-light p-4" fluid>
          <b-container class="text-left">
            <h2 class="profile-heading-bolden-caps text-left mb-5">Hello, I'm Ola Lowe!</h2>
            <p>I am a talanted Freelance Graphic Designer and Illustrator. I design websites, logos, brochures, banners, book covers, and everything related to design and inspiration. I have graduated from International University of Design. Some of my works featured on international exhibition of design.</p>
            <b-button variant="outline-primary" rounded>Share</b-button>
            <hr>
          </b-container>
          <b-container class="text-left">
            <b-row>
            <b-col>
              <h3 class="text-muted-custom title-thin mb-5">personal information</h3>
              <b-container class="pl-0 w-75 ml-0">
                <dl>
                  <b-row style="max-width: 250px;">
                    <b-col sm="12" md="6">
                      <dt>Full Name</dt>
                    </b-col>
                    <b-col md="6">
                      <dd>Ola Lowe</dd>
                    </b-col>
                  </b-row>
                  <b-row style="max-width: 250px;">
                    <b-col sm="12" md="6">
                      <dt>D.O.B</dt>
                    </b-col>
                    <b-col md="6">
                      <dd>09 06 2000</dd>
                    </b-col>
                  </b-row>
                  <b-row style="max-width: 250px;">
                    <b-col sm="12" md="6">
                      <dt>Address</dt>
                    </b-col>
                    <b-col md="6">
                      <dd>280 Peasant Ave, NYC </dd>
                    </b-col>
                  </b-row>
                  <b-row style="max-width: 250px;">
                    <b-col sm="12" md="6">
                      <dt>E-mail</dt>
                    </b-col>
                    <b-col md="6">
                      <dd>olalowe@gmail.com</dd>
                    </b-col>
                  </b-row>
                  <b-row style="max-width: 250px;">
                    <b-col sm="12" md="6">
                      <dt>Phone Number</dt>
                    </b-col>
                    <b-col md="6">
                      <dd>+1 999 999 9999</dd>
                    </b-col>
                  </b-row>
                </dl>
              </b-container>
            </b-col>
            <b-col>
              <h3 class="text-muted-custom title-thin mb-5">languages</h3>
              <b-row class="mb-3">
                <b-col sm="12">
                  <dt>English</dt>
                </b-col>
                <b-col sm="12">
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet"></span>
                  <span class="bullet"></span>
                  <span class="progress-text text-muted-custom">native</span>
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col sm="12">
                  <dt>Spanish</dt>
                </b-col>
                <b-col sm="12">
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet bullet-fill"></span>
                  <span class="bullet"></span>
                  <span class="bullet"></span>
                  <span class="bullet"></span>
                  <span class="bullet"></span>
                  <span class="progress-text text-muted-custom">fluent</span>
                </b-col>
              </b-row>
            </b-col>
            </b-row>
            <hr>
          </b-container>

          <b-container class="text-left">
           <b-row>
             <b-col>
               <h3 class="text-muted-custom title-thin mb-5">professional skills</h3>
             </b-col>
           </b-row>
           <hr>
          </b-container>
          <b-container class="text-left">
            <b-row>
              <b-col>
                <h3 class="text-muted-custom title-thin mb-5">test scores</h3>
                <b-row style="max-width: 250px;">
                    <b-col sm="12" md="6">
                      <dt>SAT</dt>
                    </b-col>
                    <b-col md="6">
                      <dd>1450</dd>
                    </b-col>
                  </b-row>
                  <b-row style="max-width: 250px;">
                    <b-col sm="12" md="6">
                      <dt>SAT Math</dt>
                    </b-col>
                    <b-col md="6">
                      <dd>740</dd>
                    </b-col>
                  </b-row>
                  <b-row style="max-width: 250px;">
                    <b-col sm="12" md="6">
                      <dt>SAT English</dt>
                    </b-col>
                    <b-col md="6">
                      <dd>710</dd>
                    </b-col>
                  </b-row>
              </b-col>
            </b-row>
          </b-container>
          <!-- END  -->
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

window.onscroll = function () {
  const scrollPosY = window.pageYOffset
  const element = document.getElementById('card-avatar-custom')
  console.log(window.width)

  if ((scrollPosY > 40) && (window.outerWidth > 1199)) {
    element.style.position = 'fixed'
    element.style.top = '40px'
    element.style.left = '35px'
  } else {
    element.style.position = 'relative'
    element.style.top = 'inherit'
    element.style.left = 'inherit'
  }
}
export default {
  data () {
    return {}
  }
}
</script>

<style>
.profile-container {
  font-family: 'Quicksand', sans-serif;
  color: #010101;
}

.profile-heading-bolden-caps {
  font-weight: 800;
  text-transform: uppercase;
}

.card-avatar {
  background-color: #c0e3e7;
  box-shadow: -3px 3px 20px 0px rgba(0,0,0,0.4);
  padding: 0;
  margin: 0;
  max-width: 250px;
}

.text-muted-custom {
  color: inherit;
  opacity: .65;
  font-size: 1.143em;
}

.profile-white {
  background-color: #fff;
}

.profile-border-light {
  border: 1px rgb(225, 225, 225) solid;
}

.title-thin {
  font-size: 1.35em;
  font-weight: 400;
}

.progress-text {
  display: inline-block;
  font-size: .8em;
  line-height: .938em;
}
.bullet {
  display: inline-block;
  border: 1px #c0e3e7 solid;
  width: .938em;
  height: .938em;
  border-radius: 50%;
  margin-right: .31em;
  line-height: .938em;
  vertical-align: middle;
}

.bullet-fill {
  background-color: #c0e3e7;
}
@media (min-width: 1199px) { 
  .p-0-custom {
    padding: 2rem !important;
  }
}

@media(max-width: 1199px) {
  .card-avatar {
    box-shadow: none;
    max-width: 100%;
  }
  .profile-border-light {
    border: none;
  }
  .p-0-custom {
    padding: 0 !important;
  }
}
</style>
