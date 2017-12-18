<template>
  <b-container class="profile-container" fluid v-show="this.$store.getters.isUserOnline">
    <b-row>
      <user-box :username="name" :occupation="this.user.occupation" :url="this.user.photoURL"></user-box>
      <b-col class="p-0-custom">
        <b-container class="profile-border-light p-4" fluid>
          <b-container class="text-left">
            <b-form-input v-model="name"
                  class="mb-2"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
            <b-form-input v-model="school"
                  class="mb-2"
                  type="text"
                  placeholder="Enter your school"></b-form-input>
            <b-form-input v-model="photo"
                  class="mb-2"
                  type="text"
                  placeholder="Enter a photo URL"></b-form-input>
            <b-form-textarea id="textarea1"
                     v-model="desc"
                     placeholder="Enter a description about yourself"
                     :rows="3"
                     class="mb-5"
                     :max-rows="7"></b-form-textarea>
            <b-button variant="outline-primary" @click="commitData" rounded>Publish Edits</b-button>
            <hr>
          </b-container>
          <b-container class="text-left">
            <b-row>
            <b-col>
              <h3 class="text-muted-custom title-thin mb-5">personal information</h3>
              <b-row class="my-1">
                <b-col sm="12"><label for="dob">Date of Birth</label></b-col>
                <b-col sm="10">
                  <b-form-input id="dob" size="sm" type="date" v-model="birthDate" placeholder="Enter your birthdate"></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="12"><label for="number">Mobile Phone Address</label></b-col>
                <b-col sm="10">
                  <b-form-input id="number" size="sm" type="tel" v-model="phoneNumber" placeholder="Enter your phone address you wish to be contacted through."></b-form-input>
                </b-col>
              </b-row>
              <!-- <user-list :list="this.userData"></user-list> -->
            </b-col>
            <b-col>
              <h3 class="text-muted-custom title-thin mb-5">languages</h3>
              <b-button variant="primary" @click="addLang">Add Language</b-button>
              <b-button variant="danger" @click="deleteLang">Delete Language</b-button>
              <b-dropdown class="mb-3">
                <div v-for="item in languages" :key="item.name">
                <b-dropdown-item v-model="languages">{{ item.name }} - {{ item.level }} - {{ item.fluency }}</b-dropdown-item>
                </div>
              </b-dropdown>
              <b-form-select v-model="fluency" class="mb-3">
                <option value="native">Native</option>
                <option value="proficient">Proficient</option>
                <option value="fluent">Fluent</option>
              </b-form-select>
              <b-form-select v-model="selectedLevel" class="mb-3">
                <option v-for="val in languageLevels" :value="val" :key="val">{{ val }}</option>
              </b-form-select>
              <b-form-input v-model="languageName" placeholder="Enter the language name"></b-form-input>
                <skill-bullets title="English" tag="native" :filled="8"></skill-bullets>
                <skill-bullets title="Spanish" tag="fluent" :filled="6"></skill-bullets>
            </b-col>
            </b-row>
            <hr>
          </b-container>

          <b-container class="text-left">
           <b-row>
             <b-col>
               <h3 class="text-muted-custom title-thin mb-5 d-inline-block">professional skills</h3>
               <b-button class="d-inline-block ml-3" @click="addSkill">+ Add Skill</b-button>
               <b-button class="d-inline-block ml-3" variant="danger" @click="deleteSkill">- Delete Skill</b-button>
               <b-input placeholder="Enter a skill" v-model="currentBadge"></b-input>
               <span v-for="(item, index) in professionalSkills" :key="index">
               <b-badge v-model="professionalSkills" class="m-2">{{ item }}</b-badge>
               </span>
             </b-col>
           </b-row>
           <hr>
          </b-container>
          <b-container class="text-left">
            <b-row>
              <b-col>
                <h3 class="text-muted-custom title-thin mb-5">test scores</h3>
                <b-button class="d-inline-block ml-3" @click="addScore">+ Add Score</b-button>
                <b-button class="d-inline-block ml-3" @click="deleteScore" variant="danger">- Delete Score</b-button>
                <b-input v-model="testType" class="mb-1" placeholder="Enter the test's name"></b-input>
                <b-input class="mb-1" v-model="testGrade" placeholder="Enter the test score"></b-input>
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
      name: '',
      currentBadge: '',
      testType: '',
      testGrade: '',
      school: '',
      phoneNumber: '',
      photo: '',
      birthDate: '',
      desc: '',
      languageName: '',
      selectedLevel: 0,
      fluency: '',
      professionalSkills: [],
      languageLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      languages: [],
      testScores: []
    }
  },
  methods: {
    addLang () {
      this.languages.push({ name: this.languageName, fluency: this.fluency, level: this.selectedLevel })
    },
    deleteLang () {
      const index = this.languages.find(obj => {
        return obj.name.toUpperCase() === this.languageName.toUpperCase()
      })
      if (index) {
        this.languages.splice(index, 1)
      }
    },
    addSkill () {
      this.professionalSkills.push(this.currentBadge)
      this.currentBadge = ''
    },
    deleteSkill () {
      const index = this.professionalSkills.find(skill => {
        return skill.toUpperCase() === this.currentBadge.toUpperCase()
      })
      if (index) { 
        this.professionalSkills.splice(index, 1)
      }
    },
    addScore () {
      this.testScores.push({ title: this.testType, text: this.testGrade })
    },
    deleteScore () {
      const index = this.testScores.find(obj => {
        return obj.text.toUpperCase() === this.testType.toUpperCase()
      })
      if (index) { 
        this.testScores.splice(index, 1)
      }
    },
    commitData () {
      this.name = (this.name === '' || this.name == null) ? this.$store.getters.user.name : this.name
      if (this.name === '' || this.name == null) { this.name = "Unknown User" }
      if (this.photo === '' || this.photo == null) { this.photo = 'https://lorempixel.com/125/125/technics/8/'}
      const packet = {
        testScores: this.testScores,
        skills: this.professionalSkills,
        languages: this.languages,
        name: this.name,
        school: this.school,
        photoURL: this.photo,
        number: this.phoneNumber,
        desc: this.desc,
        dob: this.birthDate
      }
      console.log(packet)
      this.$store.dispatch('updateUser', packet)
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
  },
  props: ['id']
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
