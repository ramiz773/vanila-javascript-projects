let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

function showError(input, mess) {
   const formControl = input.parentElement;

   formControl.className = "form-control error";
   const small = formControl.querySelector("small");
   small.innerText = mess;
}
// show success outline
function showSuccess(input) {
   const formControl = input.parentElement;
   console.log(formControl);
   formControl.className = "form-control success";
}
// check email valid
function checkEmail(input) {
   console.log(email);
   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (re.test(input.value)) {
      showSuccess(input);
   } else {
      showError(input, "Email not valid");
   }
}
// getFieldName

function getFieldName(input) {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check required fields
function checkRequired(inputArr) {
   inputArr.forEach((input) => {
      if (input.value.trim() === "") {
         showError(input, `${getFieldName(input)} is required`);
      } else if (input.id === "email") {
         checkEmail(input);
      } else {
         showSuccess(input);
      }
   });
}

// check input length

function checkLength(input, min, max) {
   if (input.value.length < min) {
      console.log(input.value.length);
      showError(input, `${getFieldName(input)}  must be at least ${min} characters`);
   } else if (input.value.length > max) {
      showError(input, `${getFieldName(input)} must be lesser than ${max}`);
   }
}
// password match check

function checkMatches(input) {
   input.value == password.value ? showSuccess(input) : showError(input, "Password do not match");
}

// event listner
form.addEventListener("submit", (e) => {
   e.preventDefault();
   checkRequired([username, email, password, password2]);
   checkLength(username, 3, 15);
   checkLength(password, 6, 25);
   checkMatches(password2);
});
