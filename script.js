let sideBar = document.querySelector(".sidebar");
let burgerButton = document.querySelector(".burger");

burgerButton.onclick = function() {
    sideBar.classList.toggle("sidebar-active");
}