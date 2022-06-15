let skills = document.getElementsByClassName('skill')
let closeModal = document.getElementsByClassName('closeModal')
for (let i = 0; i <skills.length; i++){
    skills[i].addEventListener('click', ()=> {
        skills[i].nextElementSibling.classList.add('activeModal')
    })
    closeModal[i].addEventListener('click', ()=> {
        skills[i].nextElementSibling.classList.remove('activeModal')
    })
}