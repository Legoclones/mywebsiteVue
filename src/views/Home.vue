<template>
  <div class="body-content">
    <div class="content-box">
      <div class="page-title-div"><span class="page-title">About Me</span></div>

      <img class="profile-photo" src="@/assets/ProfilePhoto.jpg">
      <p>I am a full-time sophomore pursuing a Bachelor’s in Cybersecurity and a minor in Computer Science
        from Brigham Young University in Provo, Utah. I'm originally from Chandler, Arizona, where I've 
        lived for almost all of my life.</p>
          
      <p>I'm the 4<sup>th</sup> of 6 kids, all of whom have gone to BYU in Utah or Idaho. I love computers, 
        soccer, movies, and speaking Spanish.</p>
          
      <p>If you'd like to contact me or see me on social media, you'll find my info below.</p>
    </div>

    <div class="content-box">
      <div class="page-title-div"><span class="page-title">Education</span></div>

      <div class="school">
        <h2>Brigham Young University, <em>Provo, UT</em></h2>
        <img class="school-photo" src="@/assets/BYUCampus.jpg">
        <p id="major"><em>Bachelor of Science, Cybersecurity</em></p>
        <p><em>Minor in Computer Science</em></p>
          
        <p class="bullet">• June 2020 - Present</p>
        <p class="bullet">• GPA - 4.00</p>
        <p class="bullet">• Academic, Full-Tuition Scholarship</p>
      </div>

      <div class="school">
        <h2>Chandler High School, <em>Chandler, AZ</em></h2>
        <img class="school-photo" src="@/assets/ChandlerHighSchool.jpg">
        <p><em>High School Diploma</em></p>
            
        <p class="bullet">• June 2014 - May 2018</p>
        <p class="bullet">• GPA - 4.00</p>
        <p class="bullet">• ACT - 34</p>
      </div>
    </div>
  </div>
</template>

<script>
/* @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}*/
</script>

<style scoped>
.school {
    overflow:hidden;
    margin-bottom:3em;
}
.school-photo {
    width:200px;
}
h2 {
    margin-bottom:0.5em;
}
.bullet {
    margin-bottom:0;
}
#major {
    margin-bottom:0;
}
em {
    font-weight:normal;
}
p {
    margin-bottom:1em;
}

@media only screen and (max-width: 615px) {
    .profile-photo {
        width:280px;
        margin:1em auto;
        display:block;
    }
    .school-photo {
        display:block;
        margin:1em auto;
    }
    .school {
        text-align:center;
        margin:2em 0;
    }
    .bullet {
        text-align:left;
    }
}
@media only screen and (min-width: 616px) and (max-width: 920px) {
    .profile-photo {
        width:350px;
        margin:1em auto;
        display:block;
    }
    .school-photo {
        display:block;
        margin:1em auto;
    }
    .school {
        text-align:center;
    }
    .bullet {
        text-align:left;
    }
}
@media only screen and (min-width: 921px) {
    .profile-photo {
        width:350px;
        float:right;
        margin-left:1.5em;
    }
    .school-photo {
        float:left;
        margin:0 1em 1em 0;
    }
}
</style>