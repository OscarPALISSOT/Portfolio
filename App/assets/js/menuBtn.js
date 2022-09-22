//btn menu burger and no-scroll
const menuBtn  = document.querySelector('.menu-btn');
const body  = document.getElementsByTagName('body')[0];
const links = document.getElementsByClassName('link')
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

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', e=>{
        e.preventDefault()
        document.querySelector('#NavToggle').checked = false;
        menuBtn.classList.remove('open');
        body.classList.remove('no-scroll');
        let url = new URL(links[i].href);
        let div = document.querySelector(url.hash);
        div.scrollIntoView(true, {behavior: "smooth", inline: "nearest"});
        menuOpen = false;
    })
}