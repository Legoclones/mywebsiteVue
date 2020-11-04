import Vue from 'vue'
import HeaderFooter from './HeaderFooter.vue'
import router from './router'
import educationData from './data/education.js'
import workExpData from './data/workExp.js'
import volExpData from './data/volExp.js'
import competitionsData from './data/competitions.js'
import classesData from './data/classes.js'
import languagesData from './data/languages.js'
import softwareData from './data/software.js'
import otherSkillsData from './data/otherSkills.js'
import projectsData from './data/projects.js'
import thoughtsData from './data/thoughts.js'

Vue.config.productionTip = false

let data = {
  education: educationData,
  workExp: workExpData,
  volExp: volExpData,
  competitions: competitionsData,
  classes: classesData,
  languages: languagesData,
  software: softwareData,
  otherSkills: otherSkillsData,
  projects: projectsData,
  thoughts: thoughtsData
}

new Vue({
  router,
  data,
  render: h => h(HeaderFooter)
}).$mount('#app')
