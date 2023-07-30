const body = document.querySelector("body");

const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__content");

const closeBtn = document.querySelector(".modal__icon-close");

function openModal(e) {
  if (e.target.tagName !== "IMG") return;
  modal.style.display = "flex";
  modalImg.src = e.target.src;
  body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  body.style.overflow = "visible";
}

gallery.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);
