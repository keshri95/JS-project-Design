// form validaton

let getId = (id) => document.getElementById(id);
// let getClasses = (classes) => document.getElementsByClassName(classes);

// let inputFeilds = getId(id,classes,message);
// let userName, userEmail, subject, userFeefback;

let userName = getId("name"),
  userEmail = getId("email"),
  userSub = getId("subject"),
  userFeed = getId("feedback"),
  form = getId("formValidation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  ValidaeFieleds(userName, 0, "Name can not empty");
  ValidaeFieleds(userEmail, 1, "Email can bot empty");
  ValidaeFieleds(userSub, 2, "subject cannot be empty");
  ValidaeFieleds(userFeed, 3, "feedback can not be empty");
});

let ValidaeFieleds = (id) => {
  if (id.value.trim() === "") {
    console.log("error");
  } else {
    console.log("no error");
  }
};
