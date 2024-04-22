const form = document.querySelector(".js_form");
const previewName = document.querySelector(".js_name");
const previewJob = document.querySelector(".js_job");
const previewEmail = document.querySelector(".js_email");
const previewPhone = document.querySelector(".js_phone");
const previewLinkedin = document.querySelector(".js_linkedin");
const previewGithub = document.querySelector(".js_github");
const previewCard = document.querySelector(".js_preview-card");
const btnReset = document.querySelector(".js_button-reset");
const palette = document.querySelector(".js_radio__check");
const createCard = document.querySelector(".js-create-card");
const btnShare = document.querySelector(".js-twitterLink");

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
  const nameInput = event.target.name; //name del input
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
    previewEmail.href = "mailto:" + valueInput;
  } else if (input === "phone") {
    // data.phoneNumber = valueInput;
    previewPhone.href = "tel:" + valueInput;
  } else if (input === "linkedin") {
    // data.linkedin = valueInput;
    previewLinkedin.href = valueInput;
  } else if (input === "github") {
    // data.github = valueInput;
    previewGithub.href = valueInput;
  } else if (nameInput === "palette") {
    if (valueInput === "2") {
      previewCard.classList.add("palette2");
      previewCard.classList.remove("palette1");
      previewCard.classList.remove("palette3");
    }
    if (valueInput === "3") {
      previewCard.classList.add("palette3");
      previewCard.classList.remove("palette1");
      previewCard.classList.remove("palette2");
    } 
    if (valueInput === "1"){
      previewCard.classList.add("palette1");
      previewCard.classList.remove("palette3");
      previewCard.classList.remove("palette2");
    }
    }

  console.log(data);
};

form.addEventListener("input", handleForm);

//Boton crear tarjeta

const handleCreate = (event)=>{
  event.preventDefault();
  btnShare.classList.remove('hidden');
};
createCard.addEventListener('click', handleCreate);



function handleReset(event){

  event.preventDefault();
  const fieldset = document.querySelector('.js-fill');
  const inputs = fieldset.querySelectorAll('input');
  previewCard.classList.add("palette1");
  previewCard.classList.remove("palette3");
  previewCard.classList.remove("palette2");
  btnShare.classList.add('hidden');
 

  for (const input of inputs) {

      input.value = '';
      data[input.id] = '';
      
      previewName.innerHTML = 'Nombre Apellido';
      previewJob.innerHTML = 'Front-end developer';
      profileImage.style.backgroundImage = ``;
      profilePreview.style.backgroundImage = `url(../images/profile.jpg)`;
    }
    palette.checked=true;
    console.log(data);
  };
 
btnReset.addEventListener('click', handleReset);






