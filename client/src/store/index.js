import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      id: '',
      slug: '',
      gender: '',
      email: '',
      name: '',
      employers: [],
      education: [],
      jobs: [],
      online: false
    },
    users: [],
    occupations: [
      {
        id: '1',
        image: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-128.png',
        title: 'Software Engineering Intern, HS, Summer 2018',
        location: 'San Bruno, CA, US',
        desc: 'This position is responsible for evaluating and implementing products and procedures to enhance security productivity and effectiveness. 5 or more years of relevant work experience',
        company: 'Google',
        responsibilities: [],
        qualifications: [],
        seniority: 'Not Applicable',
        industry: 'Information Technology, Internet',
        type: 'Part-time',
        date: '2017-08-09'
      }
    ],
    companies: []
  },
  mutations: {
    setLoadedJobs: function (state, payload) {
      state.occupations = payload
    },
    setLoadedUsers: function (state, payload) {
      state.users = payload
      console.log("set users")
      console.log(state.users[0])
    },
    createJob: function (state, payload) {
      state.occupations.push(payload)
    },
    setUser: function (state, payload) {
      state.user = payload
    }
  },
  actions: {
    loadJobs: function ({commit}) {
      firebase.database().ref('jobs').once('value')
        .then(data => {
          const jobs = []
          const obj = data.val()
          for (let key in obj) {
            jobs.push({
              id: key,
              title: obj[key].title,
              image: obj[key].image,
              date: obj[key].date,
              desc: obj[key].desc,
              location: obj[key].location,
              company: obj[key].company,
              responsibilities: obj[key].responsibilities,
              qualifications: obj[key].qualifications,
              seniority: obj[key].seniority,
              industry: obj[key].industry,
              type: obj[key].industry,
              deadline: obj[key].deadline
            })
          }
          commit('setLoadedJobs', jobs)
        })
        .catch(error => {
          console.log(error)
        })
    },
    loadUsers: function ({commit}) {
      firebase.database().ref('users').once('value')
        .then(data => {
          const users = []
          const obj = data.val()
          for (let key in obj) {
            users.push({
              id: obj[key].id,
              slug: obj[key].slug || '',
              gender: obj[key].gender || '',
              email: obj[key].email,
              name: obj[key].displayName || 'John Doe',
              photoURL: obj[key].photoURL || 'https://lorempixel.com/125/125/technics/8/',
              employers: obj[key].employers || [],
              occupation: obj[key].occupation || 'Student',
              education: obj[key].education || [],
              jobs: obj[key].jobs || [],
              desc: obj[key].desc || '',
              testScores: obj[key].testScores || [],
              dob: obj[key].dob || '',
              school: obj[key].school || '',
              languages: obj[key].languages || [],
              skills: obj[key].skills || [],
              number: obj[key].number || '',
            })
          }
          commit('setLoadedUsers', users)
          console.log(users)
        }).catch(error => {
          console.log(error)
        })
    },
    createJob: function ({commit}, payload) {
      const job = {
        title: payload.title,
        location: payload.location,
        desc: payload.desc || payload.description,
        company: payload.company,
        industry: payload.industry,
        type: payload.type || payload.employmentType,
        seniority: payload.seniority,
        responsibilities: payload.responsibilities,
        qualifications: payload.qualifications,
        image: payload.image,
        date: payload.date,
        deadline: payload.deadline
      }
      firebase.database().ref('jobs').push(job)
        .then((data) => {
          console.log(data)
          const key = data.key
          commit('createJob', {
            ...job,
            id: key
          })
        }).catch(error => {
          console.log(error)
        })
    },
    registerUser: function ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        if (user != null) {
          const newUser = {
            id: user.uid,
            slug: user.slug || '',
            gender: user.gender || '',
            email: user.email,
            name: user.displayName || 'John Doe',
            photoURL: user.photoURL || 'https://lorempixel.com/125/125/technics/8/',
            employers: user.employers || [],
            occupation: user.occupation || 'Student',
            education: user.education || [],
            jobs: user.jobs || [],
            desc: user.desc || '',
            accountType: payload.accountType || 'Student',
            testScores: user.testScores || [],
            testScores: user.testScores || [],
            dob: user.dob || '',
            school: user.school || '',
            languages: user.languages || [],
            skills: user.skills || [],
            number: user.number || '',
            online: true
          }
          firebase.database().ref('users/' + user.uid).set(newUser)
          commit('setUser', newUser)
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    updateUser: function ({commit}, payload) {
      const user = firebase.auth().currentUser
      const newUser = {
        id: user.uid,
        slug: user.slug || '',
        gender: user.gender || '',
        email: user.email,
        desc: user.desc || '',
        occupation: user.occupation || 'Student',
        accountType: user.accountType || 'Student',
        photoURL: user.photoURL || 'https://lorempixel.com/125/125/technics/8/',
        employers: user.employers || [],
        education: user.education || [],
        ...payload,
        online: true
      }
      firebase.database().ref('users').child(user.uid).update(newUser)
      commit('setUser', newUser)
    },
    loginUser: function ({commit}, payload) {
      if (payload != null) {
        const newUser = {
          id: payload.uid,
          slug: payload.slug || '',
          gender: payload.gender || '',
          email: payload.email,
          desc: payload.desc || '',
          occupation: payload.occupation || 'Student',
          accountType: payload.accountType || 'Student',
          name: payload.displayName || 'John Doe',
          photoURL: payload.photoURL || 'https://lorempixel.com/125/125/technics/8/',
          employers: payload.employers || [],
          education: payload.education || [],
          testScores: payload.testScores || [],
          dob: payload.dob || '',
          school: payload.school || '',
          languages: payload.languages || [],
          skills: payload.skills || [],
          number: payload.number || '',
          jobs: payload.jobs || [],
          online: true
        }
        commit('setUser', newUser)
      }
    },
    signOut: function ({commit}, payload) {
      commit('setUser', {online: false})
    },
    addUserJob: function ({commit}, payload) {
      const user = firebase.auth().currentUser
      const newUser = {
        id: user.uid,
        slug: user.slug || '',
        gender: user.gender || '',
        email: user.email,
        name: user.displayName || 'John Doe',
        photoURL: user.photoURL || 'https://lorempixel.com/125/125/technics/8/',
        employers: user.employers || [],
        occupation: user.occupation || 'Student',
        education: user.education || [],
        accountType: user.accountType || 'Student',
        jobs: user.jobs || [],
        desc: user.desc || '',
        testScores: user.testScores || [],
        testScores: user.testScores || [],
        dob: user.dob || '',
        school: user.school || '',
        languages: user.languages || [],
        skills: user.skills || [],
        number: user.number || '',
        online: true
      }
      for (let key in payload) {
        newUser.jobs.push(payload[key][0])
      }
      firebase.database().ref('users').child(user.uid).update(newUser)
      commit('setUser', newUser)
    }
  },
  getters: {
    occupations: function (state) {
      return state.occupations.sort((jobA, jobB) => {
        return jobA.date > jobB.date
      })
    },
    userList: function (state) {
      return state.users.sort((userA, userB) => {
        return userA.id > userB.id
      })
    },
    isUserOnline: function (state) { return state.user.online },
    getUser: function (state) { return state.user },
    featuredJobs: function (state, getters) { return getters.occupations.slice(0, 3) },
    loadJob: function (state) {
      return (jobId) => {
        return state.occupations.find((job) => {
          return job.id === jobId
        })
      }
    },
    getUsahs (state) { return state.users },
    loadUser: function (state) {
      return (uid) => {
        return state.users.find((user) => {
          return uid == user.id
        })
      }
    }
  }
})
