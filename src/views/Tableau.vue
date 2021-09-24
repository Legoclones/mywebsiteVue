<template>
    <div class="body-content">
        <div class="content-box">
            <div class="page-title-div"><span class="page-title">My Thoughts</span></div>
            
            <div v-for="thought in thoughts" :key="thought.question">
                <p class="question">{{thought.question}}</p>
                <p class="answer">{{thought.answer}}</p>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  computed: {
    thoughts(){
      return this.$root.$data.thoughts;
    }
  }
}
</script>

<style scoped>
p, h2 {
    margin: 0;
    padding: 0;
}
.question {
    margin-bottom:0.5em;
    font-style:italic;
    text-decoration: underline;
}
.answer {
    margin-bottom:2em;
}
</style>