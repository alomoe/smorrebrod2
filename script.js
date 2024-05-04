function toggleMenu() {
    var menuContainer = document.getElementById("menuContainer");
    let paragraph = document.querySelector('.hamburger-menu');
    if (!menuContainer.classList.contains('open')) {
        menuContainer.classList.add('open');
        paragraph.style.opacity = 0;
        setTimeout(function() {
          paragraph.innerHTML = '&#215;';
          paragraph.style.fontSize = '30px';
          paragraph.style.top = '10px';
          paragraph.style.opacity = 1;
        }, 100);

    } else {
        menuContainer.classList.remove('open');
        paragraph.style.opacity = 0;
        setTimeout(function() {
          paragraph.innerHTML = '&#9776;';
          paragraph.style.fontSize = '20px';
          paragraph.style.top = '13px';
          paragraph.style.opacity = 1;
        }, 100);
    }
}