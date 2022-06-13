let skills = document.getElementsByClassName('skill')

for (let i = 0; i <skills.length; i++){
    skills[i].addEventListener('click', ()=> {
        document.getElementById(i).classList.add('activeModal')
    })
}