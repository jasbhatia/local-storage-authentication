let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let password = document.getElementById("pwd");
let confirmPwd = document.getElementById("pwd2");
const error = document.getElementById("error");
const success = document.getElementById("sucess");
const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");
let detailSection = document.querySelector(".details");
let logoutDiv = document.querySelector(".logout");
let formDiv = document.querySelector(".form-div");
let profile = document.getElementById("profile");
let signUp = document.getElementById("sign-up");

// generate random string**************************////
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// console.log(generateString(16));

// signUp functionality************************///////
let obj = {};
signupBtn.addEventListener("click", () => {
  let Token = generateString(16);

  if (
    fullName.value.trim() == "" ||
    email.value.trim() == "" ||
    password.value.trim() == "" ||
    confirmPwd.value.trim() == ""
  ) {
    error.innerText = "Error: All fields are mandatory.";
  } else {
    success.innerText = "Successfully Signed Up!";
    localStorage.setItem("name", fullName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("confirmPwd", confirmPwd.value);
    localStorage.setItem("token", Token);
    success.innerText = "Successfully Signed Up!";
    profileFun();
  }
});
function profileFun() {
  if (localStorage.getItem("token") !== "") {
    profile.addEventListener("click", () => {
      formDiv.style.display = "none";
      logoutDiv.style.display = "block";
      detailSection.style.display = "block";
      let str = "";
      str = `<h1>Profile</h1>
        <h1>Full Name:${localStorage.getItem("name")}</h1>
        <h1>Email:${localStorage.getItem("email")}</h1>
        <h1>Password:${localStorage.getItem("password")}</h1>`;
      detailSection.innerHTML = str;
    });
    signUp.addEventListener("click", () => {
      formDiv.style.display = "none";
      logoutDiv.style.display = "block";
      detailSection.style.display = "block";
      let str = "";
      str = `<h1>Profile</h1>
        <h1>Full Name:${localStorage.getItem("name")}</h1>
        <h1>Email:${localStorage.getItem("email")}</h1>
        <h1>Password:${localStorage.getItem("password")}</h1>`;
      detailSection.innerHTML = str;
    });
  } else {
    profile.addEventListener("click", () => {
      formDiv.style.display = "block";
      logoutDiv.style.display = "none";
      detailSection.style.display = "none";
    });
  }
}
// logout*************
logoutBtn.addEventListener("click", () => {
  fullName.value = "";
  email.value = "";
  password.value = "";
  confirmPwd.value = "";

  formDiv.style.display = "block";
  logoutDiv.style.display = "none";
  detailSection.style.display = "none";

  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("confirmPwd");
  localStorage.removeItem("token");
  error.innerText = "";
  success.innerText = "";
  let str = "";
  str = `<h1>Profile</h1>
        <h1>Full Name:</h1>
        <h1>Email:</h1>
        <h1>Password:</h1>`;
  detailSection.innerHTML = str;
});

// if (localStorage.getItem("token") == "") {
//   profile.addEventListener("click", () => {
//     logoutDiv.style.display = "none";
//     detailSection.style.display = "none";
//   });

//   signUp.addEventListener("click", () => {
//     logoutDiv.style.display = "none";
//     detailSection.style.display = "none";
//     // formDiv.style.display = "block";
//   });
// }
