let sideBar = document.querySelector(".sidebar");
let burgerButton = document.querySelector(".burger");
let exitIcon = document.querySelector(".exit");

burgerButton.onclick = function() {
    sideBar.classList.add("sidebar-active");
}

exitIcon.onclick = function() {
    sideBar.classList.remove("sidebar-active");
}