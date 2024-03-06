const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

sun.classList.add('toggle-hidden');

var stylesheet = document.getElementById('theme');

sun.addEventListener('click',event =>{
    sun.style.transitionDelay = '0s';
    sun.classList.add('toggle-hidden')
    moon.classList.remove('toggle-hidden')
    stylesheet.href = 'styles/themes/lightmode.css'
});

moon.addEventListener('click', event =>{
    sun.transitionDelay = '0.5s';
    moon.classList.add('toggle-hidden');
    sun.classList.remove('toggle-hidden');
    stylesheet.href = 'styles/themes/darkmode.css';
   
});