document.getElementsByClassName('fa-bars')[0].addEventListener('click', function() {
    document.getElementById('nav-content-mobile').classList.add('open');
})
document.getElementsByClassName('fa-xmark')[0].addEventListener('click', function() {
    document.getElementById('nav-content-mobile').classList.remove('open');
})
if (window.innerWidth <= '1024') {
    document.getElementsByClassName('groupe1')[0].setAttribute('data-aos', 'fade-right');
    document.getElementsByClassName('groupe2')[0].setAttribute('data-aos', 'fade-right');
    var boucle = document.getElementsByClassName('containerImg');
    for (let i = 0; i < boucle.length; i++) {
        document.getElementsByClassName('containerImg')[i].setAttribute('data-aos', 'fade-right');
    }
}