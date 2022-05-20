document.getElementsByClassName('fa-bars')[0].addEventListener('click', function() {
    document.getElementById('nav-content-mobile').classList.add('open');
})
document.getElementsByClassName('fa-xmark')[0].addEventListener('click', function() {
    document.getElementById('nav-content-mobile').classList.remove('open');
})
