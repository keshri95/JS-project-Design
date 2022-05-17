// form validaton

let getId = (id) => document.getElementById(id);

let getClasses = (classes) => document.getElementsByClassName(classes);

// let inputFeilds = getId(id,classes,message);
// let userName, userEmail, subject, userFeefback;

let userName = getId("name"),
  userEmail = getId("email"),
  userSub = getId("subject"),
  userFeed = getId("feedback"),
  form = getId("formValidation"),
  erroMsg = getClasses("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  ValidaeFieleds(userName, 0, "Name can not empty");
  ValidaeFieleds(userEmail, 1, "Email can bot empty");
  ValidaeFieleds(userSub, 2, "subject cannot be empty");
  ValidaeFieleds(userFeed, 3, "feedback can not be empty");
});

let ValidaeFieleds = (id, elem, message) => {
  if (id.value.trim() === "") {
    erroMsg[elem].innerHTML = message;
  } else {
    erroMsg[elem].innerHTML = "";
    console.log(userName.value, userEmail.value, userSub.value, userFeed.value);
  }
};
