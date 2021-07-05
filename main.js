var backVedio = document.getElementById('videoBack');
var playingBtn = document.getElementById('btn');
var btnPlay = document.getElementsByClassName('playBtn');

btn.onclick = function(){
  videoBack.style.display = 'block';
  if (videoBack.paused) {
    videoBack.play();
    btnPlay.src = "pause.png";
  }
  else {
    videoBack.pause();
    btnPlay.src = "play.png";
  }
}
/// saidbar///
var iconBtn = document.getElementById('iconBtn');
var saidNav = document.getElementById('saidNav');
var meun = document.getElementById('meun');
iconBtn.onclick = function(){
  if (saidNav.style.right =='-250px'){
    saidNav.style.right ='0';
    meun.src ="close.png";
  }else{
    saidNav.style.right ='-250px';
    meun.src ="menu.png";
  }
}
//Initialize Swiper//
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
