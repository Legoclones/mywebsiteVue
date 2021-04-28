<template>
    <div class="body-content">
        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Work Experience</span></div>

            <div class="experience" v-for="wexp in workExperience" :key="wexp.dates">
                <h2>{{wexp.orgComp}} <em>({{wexp.dates}})</em></h2>
                <p class="title">{{wexp.title}} ({{wexp.location}})</p>
                
                <p v-for="accomplishment in wexp.accomplishments" :key="accomplishment">• {{accomplishment}}</p>
            </div>

        </div>

        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Volunteer Experience</span></div>

            <div class="experience" v-for="vexp in volunteerExperience" :key="vexp.dates">
                <h2>{{vexp.orgComp}} <em>({{vexp.dates}})</em></h2>
                <p class="title">{{vexp.title}} ({{vexp.location}})</p>
                
                <p v-for="detail in vexp.details" :key="detail">• {{detail}}</p>
            </div>

        </div>

        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Competitions</span></div>

            <div class="experience" v-for="competition in competitions" :key="competition.name">
                <h2 class="bullet-space">{{competition.name}}</h2>

                <p>• Placed {{competition.place}}</p>
                <p>• Focuses - <template v-for="focus in competition.focuses">{{focus}}, </template>etc.</p>
                <p>• <a :href="competition.link" target="_blank">Link to their website ↗</a></p><br>
            </div>

        </div>

        <div class="content-box">
            <div class="page-title-div"><span class="page-title">Tech-related Classes</span></div>

            <div class="experience">
                <h2 class="bullet-space">Completed classes</h2>
                
                <p v-for="sclass in classes.completedClasses" :key="sclass">• {{sclass}}</p><br>

                <!--<h2 class="bullet-space">Current classes</h2>
                
                <p v-for="sclass2 in classes.currentClasses" :key="sclass2">• {{sclass2}}</p>-->
            </div>

        </div>
    </div>
</template>

<script>
export default {
  computed: {
    workExperience(){
      return this.$root.$data.workExp;
    },
    volunteerExperience(){
      return this.$root.$data.volExp;
    },
    competitions(){
      return this.$root.$data.competitions;
    },
    classes(){
      return this.$root.$data.classes;
    }
  }
}
</script>

<style scoped>
p, h2 {
    margin: 0;
    padding: 0;
}
.experience {
    margin-bottom:2em;
}
.title {
    font-style: italic;
    margin-bottom:0.5em;
}
em {
    font-weight:normal;
}
.bullet-space {
    margin-bottom:0.5em;
}
</style>