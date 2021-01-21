<template>
    <div class="body-content">
        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Coding Languages</span></div>

            <div class="ability-project-center">
                <table>
                    <tr v-for="language in languages" :key="language.name">
                        <td><p>{{language.name}}</p></td><td class="stars"><img :src="'/stars/' + language.stars + 'Star.png'" width="100px"></td>
                    </tr>
                </table>
            </div>

        </div>
        
        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Software</span></div>

            <div class="ability-project-center">
                <table>
                    <tr v-for="software in softwares" :key="software.name">
                        <td><p>{{software.name}}</p></td><td class="stars"><img :src="'/stars/' + software.stars + 'Star.png'" width="100px"></td>
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
    languages(){
      return this.$root.$data.languages;
    },
    softwares(){
      return this.$root.$data.software;
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