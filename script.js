let form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("form submitted");
})