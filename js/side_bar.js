
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.querySelector(".header__icon").setAttribute("onClick", "closeNav()");
    changeMenuIcon();
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.querySelector(".header__icon").setAttribute("onClick", "openNav()");
    changeMenuIcon();
}

function changeMenuIcon() {
    document.querySelector(".header__icon").classList.toggle("header__icon--close");
    document.querySelector(".header__icon").classList.toggle("change");
    document.querySelector(".side-bar").classList.toggle("side-bar--visible");
    document.querySelector(".content").classList.toggle("content--wrapped")
}