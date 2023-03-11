const overlay = document.querySelector(".overlay");

//CONFIRM MODAL================================
const modalConfirm = document.getElementById("confirm");
const btnOpenConfirm = document.getElementById("confirm-btn");

const closeModalConfirm = function () {
    modalConfirm.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const openModalConfirm = function () {
    modalConfirm.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnOpenConfirm.addEventListener("click", closeModalConfirm);
btnConfirmConfirm.addEventListener("click", openModalConfirm);

//INFO MODAL================================
const modalInfo = document.getElementById("info");
const btnOpenInfo = document.getElementById("info-btn");
const btnConfirmInfo = document.querySelector(".btn-confirm-info");

const closeModalInfo = function () {
    modalInfo.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const openModalInfo = function () {
    modalInfo.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnOpenInfo.addEventListener("click", closeModalInfo);
btnConfirmInfo.addEventListener("click", openModalInfo);

//WARNING MODAL================================
const modalWarning = document.getElementById("warning");
const btnOpenWarning = document.getElementById("warning-btn");
const btnConfirmWarning = document.querySelector(".btn-confirm-warning");

const closeModalWarning = function () {
    modalWarning.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const openModalWarning = function () {
    modalWarning.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnOpenWarning.addEventListener("click", closeModalWarning);
btnConfirmWarning.addEventListener("click", openModalWarning);

//ERROR MODAL================================
const modalError = document.getElementById("error");
const btnOpenError = document.getElementById("error-btn");
const btnConfirmError = document.querySelector(".btn-confirm-error");

const closeModalError = function () {
    modalError.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const openModalError = function () {
    modalError.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnOpenError.addEventListener("click", closeModalError);
btnConfirmError.addEventListener("click", openModalError);
