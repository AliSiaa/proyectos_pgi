const check_1 = document.getElementById("check");
const menuMovil = document.getElementById("menuMovil");
console.log(check_1);

check_1.addEventListener("click", function () {

  // document.body.style = "background-color: black";
  document.body.classList.toggle("cambio");

});


/* X */
function closeModal() {
  /* console.log("PEPE") */
  menuMovil.style.display = "none";

}