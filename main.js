let header = document.getElementById("navbarSide");
let items = header.getElementsByClassName("nav-item");


for (let i = 0; i < items.length; i++) {

    items[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



document.getElementById("dark-btn").onclick = function (){
    $("body").toggleClass('dark-mode');
    $("#fa").toggleClass("fa-moon-o fa-sun-o");
}


let likes = document.querySelectorAll(".fa-heart");

likes.forEach(function(el){
    el.onclick = function (){
        this.classList.toggle("liked");
    }
});