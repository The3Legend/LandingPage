const userName = document.getElementById("inputName");
const phone = document.getElementById("inputPhone");
const email = document.getElementById("inputEmail");
const massage = document.getElementById("inputMassage");
const errorName = document.getElementById("errorName");
const errorPhone = document.getElementById("errorPhone");
const errorEmail = document.getElementById("errorEmail");
const errorMassage = document.getElementById("errorMassage");
const regMail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const regName = /^[a-zA-Zа-яА-Я0-9_-]{3,16}$/;

// Валідація форми для Email
function validateEmail() {
  if (email.value === "") {
    errorEmail.textContent = "Обязательное поле";
    email.classList.add("borderColor");
    errorEmail.style.fontSize = "10px";
    errorEmail.style.color='red'
  } else if (!email.value.match(regMail)) {
    errorEmail.textContent = "Некорректные данные email";
    errorEmail.style.fontSize = "10px";
    errorEmail.style.color='red'
    email.classList.add("borderColor");
  } else {
    email.classList.remove("borderColor");
    errorEmail.textContent = "";
  }
}

// Валідація форми для Імені користувача
function validateName() {
  if (userName.value === "") {
    errorName.textContent = "Обязательное поле";
    userName.classList.add("borderColor");
    errorName.style.fontSize = "10px";
    errorName.style.color='red'
  } else if (!userName.value.match(regName)) {
    errorName.textContent = "Имя от 3 - 16 знаков";
    errorName.style.fontSize = "10px";
    errorName.style.color='red'
    userName.classList.add("borderColor");
  } else {
    userName.classList.remove("borderColor");
    errorName.textContent = "";
  }
}

// Валідація форми для Номера телефону
function validationPhone() {
  if (phone.value === "") {
    errorPhone.textContent = "Обязательное поле";
    phone.classList.add("borderColor");
    errorPhone.style.fontSize = "10px";
    errorPhone.style.color='red'
  } else if (!phone.value.match(regPhone)) {
    errorPhone.textContent = "Используйте только цифры";
    errorPhone.style.fontSize = "10px";
    errorPhone.style.color='red'
    phone.classList.add("borderColor");
  } else {
    phone.classList.remove("borderColor");
    errorPhone.textContent = "";
  }
}

// Валідація форми для Повідомлення
function validateMassage() {
  if (massage.value === "") {
    errorMassage.textContent = "Обязательное поле";
    errorMassage.style.fontSize = "10px";
    errorMassage.style.color='red'
    massage.classList.add("borderColor");
  } else {
    errorMassage.textContent = "";
    massage.classList.remove("borderColor");
  }
}
