* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{    
    font-size: 15px;
    height: 100%;
}

body{
    font-family: 'Union', Helvetica Neue, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    color: rgb(0, 0, 0);
    background-color: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;

}

a{
    text-decoration: none;
    color:inherit;
}

img {
    max-width: 100%;
    height: auto;
    max-height: 90vh;
    display: block;
}

video {
    max-width: 100% !important;
    height: auto;
}

.is-visible {
    visibility: visible;
    opacity: 1;
}

.not-visible {
    visibility: hidden;
    opacity: 0;
}

#loading {
    position: fixed;
    top:0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    
    z-index: 999;
    visibility: hidden;
    opacity: 0;
    
    -webkit-transition: opacity 100s, visibility 1.3s;
    -moz-transition: opacity 100s, visibility 1.3s;
    transition: opacity 100s, visibility 1.3s;    
}

/* loading dots*/

#loading:after {
  content: ".";
  animation: dots .65s steps(5, end) infinite;
}

@keyframes dots {
  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: black;
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow: 0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 black, 0.5em 0 0 black;
  }
}
 

#arena{
    position: relative;
    margin-top: 60px;
}

/* ARENA TEMPLATES */

#posts-container {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
}

.post {
    display: flex;
    justify-content: center;
    align-items: center;
}

.post img{
    display: block;
    max-height: 100vh;
    width: auto;
    padding: 1px;
}

.post p{
    display: block;
    padding: 10px 0;
    width: 80vw;
    margin:0 auto;
    text-align: center;
}

.post p a:link{
    border-bottom: 1px solid rgba(0,0,0,.9);
}

#post-title {
    display: none;
}
#post-desc{
    display:none;
}

.post-embed{
    text-align: center;
    min-width: 300px !important;
}

.post-image{ 
    display: block;
    margin: 0 auto;
}

.post-text {
    padding: 80px 0;
}

.post-link{
    border:1px solid #f2f2f2;
    position: relative;
}

.post-link-arrow {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width:12px;
    height: 12px;
    border-radius: 50px;
    background-color: rgba(220,200,200,1);
}


/* MOBILE */

@media only screen and (max-width: 768px) {
    
.post-image{
    max-width: 100vw;
}    
    
.post-embed{
    position: relative;
    overflow: hidden;
    padding-top: 62.5% !important;
    width: 95vw;
}
    
.post-embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
    
.post img{
    width: 100vw !important;
    max-height: inherit!important;

}

}

@font-face {  
  font-family: 'ArialMT';
  font-weight: normal;
  font-style: normal;
  src: url('https://files.cargocollective.com/c865891/ArialMT.woff') format('woff'),
       url('https://files.cargocollective.com/c865891/ArialMT.woff2') format('woff2'), 
       url('https://files.cargocollective.com/c865891/ArialMT.ttf') format('truetype');
}

@font-face {  
  font-family: 'Union';
  font-weight: normal;
  font-style: normal;
  src: url('https://files.cargocollective.com/c841411/Union-Regular.woff') format('woff'),
       url('https://files.cargocollective.com/c841411/Union-Regular.woff2') format('woff2'), 
       url('https://files.cargocollective.com/c841411/Union-Regular.ttf') format('truetype');
}
