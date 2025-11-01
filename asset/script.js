const menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = function(){
  document.getElementById("menu-item").classList.toggle("active");
}