document.getElementsByClassName('fa-bars')[0].addEventListener('click', function() {
    document.getElementById('nav-content-mobile').classList.add('open');
    document.querySelector('#nav-content-mobile').classList.remove('close');
})
document.getElementsByClassName('fa-xmark')[0].addEventListener('click', function() {
    document.getElementById('nav-content-mobile').classList.remove('open');
    document.querySelector('#nav-content-mobile').classList.add('close');
})
if (window.innerWidth <= '1024') {
    document.querySelector('.groupe1').setAttribute('data-aos', 'fade-right');
    document.querySelector('.groupe2').setAttribute('data-aos', 'fade-right');
    var boucle = document.querySelectorAll('.containerImg');
    for (let i = 0; i < boucle.length; i++) {
        document.querySelectorAll('.containerImg')[i].setAttribute('data-aos', 'fade-right');
    }
}
window.onscroll = () => {
    var scrolling= window.scrollY;
    var viewportHeight = window.innerHeight;
    if(scrolling >= viewportHeight - 100 ){
      document.querySelector('nav').classList.add('bgNav');
    }else{
      document.querySelector('nav').classList.remove('bgNav');
    }
  }
var buttons = document.querySelectorAll('.fa-brands')
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click',function (){
    alert('Too lazy to work');
  })  
}