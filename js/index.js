document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.header-menu-mobile-list');
    const mobileButton = document.querySelector('.header-menu-mobile-button');

    mobileButton.addEventListener('click', function () {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        } else {
            mobileMenu.classList.add('active');
        }
    })
});

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}