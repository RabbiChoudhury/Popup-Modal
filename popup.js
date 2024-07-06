let popup = document.getElementById("popup");
let btn = document.querySelector(".btn");
function openPopup(){
popup.classList.add("open-popup");
btn.style.display="none";
}
function closePopup(){
    popup.classList.remove("open-popup");
    btn.style.display="block";
    }
    

