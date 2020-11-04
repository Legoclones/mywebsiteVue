<template>
  <div id="app">

    <ul class="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/skills">Skills/Projects</a></li>
        <li><a href="/my-thoughts">My Thoughts</a></li>
    </ul>
    
    <div class="page-border"></div>

    <router-view/>

    <div class="page-border"></div>

    <div class="footer">
        <div class="contact">
            <div><a href="mailto:justink.applegate@gmail.com">justink.applegate@gmail.com</a></div>
            <div class="footer-divider">•</div>
            <div><a href="https://www.facebook.com/justink.applegate/" target="_blank">Facebook ↗</a></div>
            <div class="footer-divider">•</div>
            <div><a href="https://www.linkedin.com/in/justin-a-b23676139/" target="_blank">LinkedIn ↗</a></div>
            <div class="footer-divider">•</div>
            <div><a href="https://github.com/JustinApplegate" target="_blank">GitHub ↗</a></div>
        </div>
        <div>Github</div>
    </div>

  </div>
</template>

<style>
@font-face {
    font-family: mullish;
    src: url(assets/Mulish-VariableFont_wght.ttf);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: mullish, Geneva, sans-serif;
}
body {
    background-color:black;
    color:#EAECEE;
}
a {
    text-decoration:none;
}
.navbar {
    justify-content:space-around;
    width:100%;
    display:flex;
    text-transform: uppercase;
}
.navbar li {
    list-style-type:none;
    padding:1em;
    font-size:1.3em;
}
.navbar a {
    padding:0.9em;
    border-radius:15px;
    color:#00CC00;
}
.navbar a:hover {
    background-color:#048500;
    color:black;
}
.page-border {
    border-top:2px solid #00CC00;
}
.footer {
    text-align:center;
    margin:1.5em;
}
.body-content a, .footer a {
    color:#0099FF;
}
.contact {
    justify-content:center;
    display:flex;
    margin-bottom:1em;
}
.footer-divider {
    margin:0em 1em;
}
.body-content {
    margin:2em auto;
    display:flex;
}
.body-content p, .body-content li {
    font-size:1.3em;
}
.body-content {
    display:block;
    overflow:hidden;
}
.page-title {
    font-size: 3em;
    color: #E53935;
    font-weight:bold;
    border-bottom:2px solid #E53935;
}
.page-title-div {
    margin:1em 0 2em 0;
    text-align: center;
}
.content-box {
    overflow:hidden;
    margin-bottom:4em;
}

@media only screen and (max-width: 615px) {
    .body-content {
        width:300px;
    }
    .navbar {
        flex-direction: column;
        text-align:center;
    }
    .contact {
        flex-direction: column;
    }
}
@media only screen and (min-width: 616px) and (max-width: 920px) {
    .body-content {
        width:500px;
    }
    .navbar {
        flex-direction: column;
        text-align:center;
    }
}
@media only screen and (min-width: 921px) {
    .body-content {
        width:900px;
    }
    .navbar li {
        margin:1em 0.3em;
    }
}
</style>