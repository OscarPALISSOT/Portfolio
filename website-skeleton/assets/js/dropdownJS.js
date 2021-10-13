var drop = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < drop.length; i++) {
drop[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    debugger
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    } 
});
}