<template>
    <div class="body-content">
        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Technical Skills</span></div>

            <div class="ability-project-center">
                <table>
                    <tr v-for="tskill in technicalSkills" :key="tskill.name">
                        <td><p>{{tskill.name}}</p></td><td class="stars"><img :src="'/stars/' + tskill.stars + 'Star.png'" width="100px"></td>
                    </tr>
                </table>
            </div>

        </div>
        
        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Certifications</span></div>

            <div class="ability-project">
                <p v-for="certification in certifications" :key="certification.title">
                    • <a :href='certification.link' target="_blank">{{certification.title}} ↗</a>
                </p>
            </div>

        </div>

        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Other Skills</span></div>

            <div class="ability-project">
                <p v-for="skill in otherSkills" :key="skill">• {{skill}}</p>
            </div>

        </div>

        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Projects</span></div>

            <div class="ability-project">
                <p v-for="project in projects" :key="project">
                    • <a :href='project.link' target="_blank">{{project.name}} ({{project.language}}) ↗</a>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  computed: {
    technicalSkills(){
      return this.$root.$data.technicalSkills;
    },
    otherSkills(){
      return this.$root.$data.otherSkills;
    },
    projects(){
      return this.$root.$data.projects;
    },
    certifications(){
      return this.$root.$data.certifications;
    }
  },
  created () {
    document.title = "Justin Applegate - Skills";
  }
}
</script>

<style scoped>
.ability-project, .ability-project-center {
    margin-bottom:2em;
}
.stars {
    padding-left:2em;
}
.ability-project-center {
    justify-content:center;
    display:flex;
}
p, h2 {
    margin: 0;
    padding: 0;
}
</style>