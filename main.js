let header = document.getElementById("navbarSide");
let items = header.getElementsByClassName("nav-item");


for (let i = 0; i < items.length; i++) {

    items[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function NightMode() {
    let element = document.body;
    $("body").toggleClass('dark-mode');
    $("#fa").toggleClass("fa-moon-o fa-sun-o");
}

function likebtn(e) {
    e.classList.toggle("liked");
}