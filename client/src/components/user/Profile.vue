<template>
  <b-container class="profile-container" fluid v-show="this.$store.getters.isUserOnline">
    <b-row>
      <user-box :username="this.user.name" :occupation="this.user.occupation" :url="this.user.photoURL"></user-box>
      <b-col class="p-0-custom">
        <b-container class="profile-border-light p-4" fluid>
          <b-container class="text-left">
            <h2 class="profile-heading-bolden-caps text-left mb-5">Hello, I'm {{ this.user.name }}</h2>
            <p>I am a talanted Freelance Graphic Designer and Illustrator. I design websites, logos, brochures, banners, book covers, and everything related to design and inspiration. I have graduated from International High School of Design. Some of my works featured on international exhibition of design.</p>
            <b-button variant="outline-primary" rounded>Share</b-button>
            <hr>
          </b-container>
          <b-container class="text-left">
            <b-row>
            <b-col>
              <h3 class="text-muted-custom title-thin mb-5">personal information</h3>
              <user-list :list="this.userData"></user-list>
            </b-col>
            <b-col>
              <h3 class="text-muted-custom title-thin mb-5">languages</h3>
                <skill-bullets title="English" tag="native" :filled="8"></skill-bullets>
                <skill-bullets title="Spanish" tag="fluent" :filled="6"></skill-bullets>
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
    return {
      userData: [
        {title: 'Full Name', text: 'John Doe'},
        {title: 'D.O.B', text: '09 06 2000'},
        {title: 'Address', text: '280 Peasant Ave'},
        {title: 'E-mail', text: 'olalowe@gmail.com'},
        {title: 'Mobile', text: '+1 999 999 9999'}
      ],
      testScores: [
        {'title': 'SAT', 'text': '1520'},
        {'title': 'SAT Math', 'text': '740'},
        {'title': 'SAT ERW', 'text': '680'},
        {'title': 'ACT', 'text': '32'}
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
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
