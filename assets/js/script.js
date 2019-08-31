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
    
    var menu = document.querySelector('nav ul');
    if(window.innerWidth <= 766) {
        menu.addEventListener('click', function() {
            if(menu.style.display == 'flex') {
                menu.style.display = 'none';
            }
        });
    }

    $('nav ul a').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

        $('html, body').animate({
            scrollTop: targetOffset - menuHeight
        }, 900);
    });
}