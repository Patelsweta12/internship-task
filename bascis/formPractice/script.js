let saveButton = document.getElementById("submit");
saveButton.addEventListener("click", (e) => {
  e.preventDefault();

  // for name
  let userName = document.getElementById("name").value;
  console.log(userName);
  let alphNumericRegex = /^[A-Za-z]+$/;
  if (userName.trim() == "") {
    document.getElementById("userNmaeError").innerHTML = "name is required";
  } else if (!userName.match(alphNumericRegex)) {
    document.getElementById("userNmaeError").innerHTML =
      "Only alphabets are aalowed";
  } else {
    document.getElementById("userNmaeError").innerHTML = "";
  }
  // for date of birth
  let dob = document.getElementById("dob").value;
  console.log(dob);
  if (dob == "") {
    document.getElementById("dobError").innerHTML =
      "date of birth  is required";
  } else {
    document.getElementById("dobError").innerHTML = "";
  }
  // for gender
  let gender = document.getElementById("gender").value;
  console.log(gender);
  if (gender == "") {
    document.getElementById("genderError").innerHTML = "gender is required";
  } else {
    document.getElementById("genderError").innerHTML = "";
  }
  // for phone number
  let phNo = document.getElementById("phNo").value;
  let phoneNumRegex = /^[0-9]{10}$/;
  if (phNo == "") {
    document.getElementById("phoneError").innerHTML = "enter phone number";
  } else if (!phNo.match(phoneNumRegex)) {
    document.getElementById("phoneError").innerHTML = "only 10 digits allowed";
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }
  // for language select
  let language = document.getElementById("languages").value;
  console.log(language);
  if (language == "") {
    document.getElementById("languageError").innerHTML = "select one language";
  } else {
    document.getElementById("languageError").innerHTML = "";
  }
});
