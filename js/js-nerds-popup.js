let button_message=document.querySelector(".button-message");
let popup=document.querySelector(".modal");
let close=popup.querySelector(".modal-close");
let name=popup.querySelector("[name=name]");
let email=popup.querySelector("[name=email]");
let message=popup.querySelector("[name=message]")
let form=popup.querySelector("form");

button_message.addEventListener("click",function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
})

window.addEventListener("keydown", function (evt) {
    if (evt.key==="Escape") {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
})

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !message.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth=popup.offsetWidth;
        popup.classList.add("modal-error");
    }
})