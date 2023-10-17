// подключаем функции
import { formValidate } from "./scripts/formValidate.js";
import { togglePhotoTab } from "./scripts/toggleTab.js";
import { toggleVideoTab } from "./scripts/toggleTab.js";
// import { formValidate } from "./scripts/formValidate.js";

// подключаем элементы по id
const photo_review = document.getElementById("photo_review");
const video_review = document.getElementById("video_review");
const photo_container = document.getElementById("photo_container");
const video_container = document.getElementById("video_container");
const form_calculate = document.getElementById("form-calculate");
const form_sbmBtn = document.getElementById("form_button");
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const field1 = document.getElementById("field1");
const field2 = document.getElementById("field2");
const critery = document.getElementById("critery");
const critery_btn = document.getElementById("selection_btn")
const budget = document.getElementById("budget");

// смена фото на видео отзывы
photo_review.onclick = () => togglePhotoTab(photo_review, video_review, photo_container, video_container);
video_review.onclick = () => toggleVideoTab(photo_review, video_review, photo_container, video_container);

// обработка формы
formValidate(form_calculate, select1, select2, field1, field2, form_sbmBtn);

// обработка формы критериев
critery_btn.classList.add("btn-active");
critery.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(budget.elements);
})