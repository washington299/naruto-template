window.onload = function() {
    var menuMobile = document.querySelector('.menuMobile');
    var menuNav = document.querySelector('.menu nav ul');
    menuMobile.addEventListener('click', function() {
        if(menuNav.style.display == 'flex') {
            menuNav.style.display = 'none';
        }else {
            menuNav.style.display = 'flex';
        }
    });
}