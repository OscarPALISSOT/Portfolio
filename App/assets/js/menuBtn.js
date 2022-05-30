//btn menu burger and no-scroll
const menuBtn  = document.querySelector('.menu-btn');
const body  = document.getElementsByTagName('body')[0];
let menuOpen = false;
document.querySelector('#NavToggle').addEventListener('change', ()=> {
    if(!menuOpen){
        menuBtn.classList.add('open');
        body.classList.add('no-scroll');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        body.classList.remove('no-scroll');
        menuOpen = false;
    }
});