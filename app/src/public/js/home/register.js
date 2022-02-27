"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"), //#은 id를 의미
  password = document.querySelector("#password"),
  confirmPassword = document.querySelector("#confirm-password"),
  registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("write your id");
  if (password !== confirmPassword) {
    return alert("password doesn't match");
  }
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("error registering"));
    });
}
