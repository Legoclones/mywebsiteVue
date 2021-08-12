<template>
    <div class="body-content">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/TPMlZxRRaBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <ol>
          <li>Go to <a href="https://www.tableau.com/products/desktop/download">www.tableau.com</a></li>
          <li>Enter your email</li>
          <li>Run the installer that downloaded</li>
        </ol>

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
  },
  created () {
    document.title = "Justin Applegate - Tableau";
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
ol {
  padding:10px;
}
</style>