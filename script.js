let menu =  document.querySelector('.menu');
let right_navbar = document.querySelector('.right-nav')
let right_close_icon = document.querySelector('.right-close-icon');

let left_panel_close = document.querySelector('.left-panelclose-menu');
let left_panel_menu = document.querySelector('.left-panel-menu');
let left_nav_panel = document.querySelector('.side-nav');

menu.addEventListener('click',function(){
    right_navbar.classList.remove('deactive');
    right_navbar.classList.add('active');
})

right_close_icon.addEventListener('click',function(){
    right_navbar.classList.remove('active');
    right_navbar.classList.add('deactive');
})

left_panel_close.addEventListener('click',function(){
    left_nav_panel.classList.remove('active');
    left_nav_panel.classList.add('deactive');
})

left_panel_menu.addEventListener('click',function(){
    left_nav_panel.classList.remove('deactive');
    left_nav_panel.classList.add('active');
})


window.onscroll = () =>{
    right_navbar.classList.remove('active');
    right_navbar.classList.add('deactive');

    left_nav_panel.classList.remove('active');
    left_nav_panel.classList.add('deactive');
}
















