let bars_btn = document.querySelector('.bars_btn');
let navbar_2 = document.querySelector('.navbar_2');
let bars_icon = document.querySelector('.bars_icon');

bars_btn.addEventListener('click', ()=>{
    navbar_2.classList.toggle('navbar_hide')
    if (bars_icon.classList.contains('fa-bars')) {
        bars_icon.classList.remove('fa-bars');
        bars_icon.classList.add('fa-xmark');
    }
    else if (bars_icon.classList.contains('fa-xmark')) {
        bars_icon.classList.remove('fa-xmark');
        bars_icon.classList.add('fa-bars');
    }
})
