"use strict";

const id = document.querySelector("#id"); //#은 id를 의미
const password = document.querySelector("#password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };
  console.log(req);
}
