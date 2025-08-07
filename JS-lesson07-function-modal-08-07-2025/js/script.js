var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  openModal();
});

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    //console.log("Escape");
    closeModal();
  };
});

var closeModal = function (e) {
    if (modal.classList.contains("show-modal")) {
      modal.classList.remove("show-modal");
      button.innerText = "Who's got this?";
    }
  };

var openModal = function (e) {
 modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
};