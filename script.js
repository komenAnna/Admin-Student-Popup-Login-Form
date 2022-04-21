document.querySelector("#admin-login").addEventListener("click", function(){
    document.querySelector(".admin-popup").classList.add("active");
});
document.querySelector(".admin-popup .close-btn").addEventListener("click", function(){
    document.querySelector(".admin-popup").classList.remove("active");
});

document.querySelector("#student-login").addEventListener("click", function(){
    document.querySelector(".student-popup").classList.add("active");
});
document.querySelector(".student-popup .close-btn").addEventListener("click", function(){
    document.querySelector(".student-popup").classList.remove("active");
});