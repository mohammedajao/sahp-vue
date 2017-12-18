<template>
  <b-col md="12" lg="3" class="p-0-custom">
        <b-container class="card-avatar" id="card-avatar-custom" fluid>
          <div class="p-0-custom">
          <b-img rounded="circle" width="150" height="150" :src="url" class="m-3"></b-img>
          <h3 class="profile-heading-bolden-caps m-2"><strong>{{ username }}</strong></h3>
          <h6 class="text-muted-custom m-2">{{ occupation }}</h6>
          </div>
          <div class="profile-white">
            <b-button class="m-5" rounded>Download CV</b-button>
          </div>
        </b-container>
      </b-col>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    username: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    slug: String
  },
  created: function () {
    window.onscroll = function () {
      const scrollPosY = window.pageYOffset
      const element = document.getElementById('card-avatar-custom')

      if ((scrollPosY > 40) && (window.innerWidth > 995)) {
        element.style.position = 'fixed'
        element.style.top = '40px'
        element.style.left = '35px'
      } else {
        element.style.position = 'relative'
        element.style.top = 'inherit'
        element.style.left = 'inherit'
      }
    }
  }
}
</script>

<style>
.card-avatar {
  background-color: #c0e3e7;
  box-shadow: -3px 3px 20px 0px rgba(0,0,0,0.4);
  padding: 0;
  margin: 0;
  max-width: 250px;
}

.profile-white {
  background-color: #fff;
}

.profile-heading-bolden-caps {
  font-weight: 800;
  text-transform: uppercase;
}

@media(max-width: 995px) {
  .card-avatar {
    box-shadow: none;
    max-width: 100%;
  }
}
</style>
