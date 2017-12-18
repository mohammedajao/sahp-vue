<template>
  <b-container class="profile-container" fluid v-show="this.$store.getters.isUserOnline">
    <b-row>
      <user-box :username="this.user.name" :occupation="this.user.occupation" :url="this.user.photoURL"></user-box>
      <b-col class="p-0-custom">
        <b-container class="profile-border-light p-4" fluid>
          <b-container class="text-left">
            <h2 class="profile-heading-bolden-caps text-left mb-5">Hello, I'm {{ this.user.name }}</h2>
            <p>{{ this.desc }}</p>
            <b-button variant="outline-primary" rounded>Share</b-button>
            <b-button v-if="this.id == this.$store.getters.getUser.id" to="/editprofile" rounded>Edit Profile</b-button>
            <hr>
          </b-container>
          <b-container class="text-left">
            <b-row>
            <b-col>
              <h3 class="text-muted-custom title-thin mb-5">personal information</h3>
              <dl class="text-left">
                <b-row style="max-width: 300px;" >
                  <b-col md="6">
                    <dt>Full Name</dt>
                  </b-col>
                  <b-col md="6">
                    <dd>{{ this.name }}</dd>
                  </b-col>
                </b-row>
                <b-row style="max-width: 300px;" >
                  <b-col md="6">
                    <dt>D.O.B.</dt>
                  </b-col>
                  <b-col md="6">
                    <dd>{{ this.dob }}</dd>
                  </b-col>
                </b-row>
                <b-row style="max-width: 300px;" >
                  <b-col md="6">
                    <dt>E-mail</dt>
                  </b-col>
                  <b-col md="6">
                    <dd>{{ this.email }}</dd>
                  </b-col>
                </b-row>
                <b-row style="max-width: 300px;" >
                  <b-col md="6">
                    <dt>Mobile</dt>
                  </b-col>
                  <b-col md="6">
                    <dd>{{ this.number }}</dd>
                  </b-col>
                </b-row>
              </dl>
            </b-col>
            <b-col>
              <h3 class="text-muted-custom title-thin mb-5">languages</h3>
                <div v-for="(item, index) in languages" :key="index">
                  <skill-bullets :title="item.name" :tag="item.fluency" :filled="item.level"></skill-bullets>
                </div>
            </b-col>
            </b-row>
            <hr>
          </b-container>

          <b-container class="text-left">
           <b-row>
             <b-col>
               <h3 class="text-muted-custom title-thin mb-5">professional skills</h3>
               <span v-for="(item, index) in skills" :key="index">
                 <b-badge>{{ item }}</b-badge>
               </span>
             </b-col>
           </b-row>
           <hr>
          </b-container>
          <b-container class="text-left">
            <b-row>
              <b-col>
                <h3 class="text-muted-custom title-thin mb-5">test scores</h3>
                <user-list :list="testScores"></user-list>
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
import UserBox from '@/components/user/profile/ProfileUserBox.vue'
import UserList from '@/components/user/profile/ProfileUserList.vue'
import SkillBullets from '@/components/user/profile/ProfileUserSkillBullet.vue'

export default {
  data () {
    return {}
  },
  props: ['id'],
  computed: {
    user () {
      const info = this.$store.getters.loadUser(this.id)
      console.log(info)
      Object.keys(info).map((prop) => {
        this[prop] = info[prop]
      })
      return info
    }
  },
  components: {
    UserBox,
    UserList,
    SkillBullets
  }
}
</script>

<style>
.profile-container {
  font-family: 'Quicksand', sans-serif;
  color: #010101;
}

.text-muted-custom {
  color: inherit;
  opacity: .65;
  font-size: 1.143em;
}

.profile-border-light {
  border: 1px rgb(225, 225, 225) solid;
}

.title-thin {
  font-size: 1.35em;
  font-weight: 400;
}

@media (min-width: 1199px) { 
  .p-0-custom {
    padding: 2rem !important;
  }
}

@media(max-width: 1199px) {
  .profile-border-light {
    border: none;
  }
  .p-0-custom {
    padding: 0 !important;
  }
}
</style>
