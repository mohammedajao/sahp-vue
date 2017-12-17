import Vue from 'vue'
import Vuex from 'vuex'

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
      jobs: ['1'],
      online: false
    },
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
    createJob: function (state, payload) {
      state.occupations.push(payload)
    }
  },
  actions: {
    createJob: function ({commit}, payload) {
      const job = {
        id: 2,
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
      // Firebase
      commit('createJob', job)
    }
  },
  getters: {
    occupations: function (state) {
      return state.occupations.sort((jobA, jobB) => {
        return jobA.date > jobB.date
      })
    },
    isUserOnline: function (state) { return state.user.online },
    featuredJobs: function (state, getters) { return getters.occupations.slice(0, 3) },
    loadJob: function (state) {
      return (jobId) => {
        return state.occupations.find((job) => {
          return job.id === jobId
        })
      }
    }
  }
})
