var element = document.body;
var nav = document.getElementById("bbbb");

document.querySelector("#night_mode").addEventListener("click", function(){
    element.classList.toggle("night_mode");
    nav.classList.toggle("night_mode");
});