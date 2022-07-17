const menu = document.querySelector(".menu_section");
const mbtn = document.querySelector(".burger_menu_icon");
const mline1 = document.querySelector(".mline1");
const mline2 = document.querySelector(".mline2");

mbtn.addEventListener('click', ()=>{
    menu.classList.toggle("mdisplay");
    mbtn.classList.toggle("pos_fixed");
    mline1.classList.toggle("line_top");
    mline2.classList.toggle("line_bottom");
});