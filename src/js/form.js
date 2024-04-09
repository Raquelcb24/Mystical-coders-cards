const form = document.querySelector('.js_form');
const previewName = document.querySelector('.js_name');
const previewJob = document.querySelector('.js_job');
const previewEmail = document.querySelector('.js_email');
const previewPhone = document.querySelector('.js_phone');
const previewLinkedin = document.querySelector('.js_linkedin');
const previewGithub = document.querySelector('.js_github');

form.addEventListener('input', (event)=>{
    const input = event.target.id; //obtener id del input
    const valueInput = event.target.value; //obtener valor input
    console.log("working input");

    if (input === 'completeName'){
        previewName.innerHTML = valueInput;
    } else if (input === 'position'){
        previewJob.innerHTML = valueInput;
    } else if (input === 'email'){
        previewEmail.href = valueInput;
    } else if (input === 'phoneNumber'){
        previewPhone.href = valueInput;
    } else if (input === 'linkedin'){
        previewLinkedin.href = valueInput;
    } else if (input === 'github'){
        previewGithub.href = valueInput;
    };
});