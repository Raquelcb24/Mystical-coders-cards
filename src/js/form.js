const form = document.querySelector(".js_form");
const previewName = document.querySelector(".js_name");
const previewJob = document.querySelector(".js_job");
const previewEmail = document.querySelector(".js_email");
const previewPhone = document.querySelector(".js_phone");
const previewLinkedin = document.querySelector(".js_linkedin");
const previewGithub = document.querySelector(".js_github");
const previewColorRed = document.querySelector(".js_red");

const data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

const handleForm = (event) => {
  event.preventDefault();
  const input = event.target.id; //obtener id del input
  const valueInput = event.target.value; //obtener valor input
  console.log("working input");

  data[input] = valueInput;

  if (input === "name") {
    // data.completeName = valueInput;
    previewName.innerHTML = valueInput;
  } else if (input === "job") {
    // data.position = valueInput;
    previewJob.innerHTML = valueInput;
  } else if (input === "email") {
    // data.email = valueInput;
    previewEmail.href = valueInput;
  } else if (input === "phone") {
    // data.phoneNumber = valueInput;
    previewPhone.href = valueInput;
  } else if (input === "linkedin") {
    // data.linkedin = valueInput;
    previewLinkedin.href = valueInput;
  } else if (input === "github") {
    // data.github = valueInput;
    previewGithub.href = valueInput;
  } else if (input === "palette") {
    if (valueInput === 2) {
      previewName.classList.add("red");
    }
  }

  console.log(data);
};
form.addEventListener("input", handleForm);
