function openNav() {
document.getElementById("sideMenu").style.translate = "0px";
}
  
function closeNav() {
document.getElementById("sideMenu").style.translate = "100px";
}

function scrollTo(id){
    alert('errr');
    document.getElementById(id).scrollIntoView();
    // location.hash = "#"+id;
}

// Show menu debut
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.style.bottom = 0;
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.style = "bottom: -100%";
    })
}

// Show menu fin

// Hide mobile menu debut

const navLink = document.querySelectorAll('.navLink');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.style = "bottom: -100%";
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Hide mobile menu fin

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

educationTab = document.getElementById("educationTab");
workTab = document.getElementById("workTab");

educationTab.addEventListener('click', ()=>{
    document.getElementById("work").classList.remove("qualificationActive");
    document.getElementById("education").classList.add("qualificationActive");
    workTab.classList.remove('tabActive');
    educationTab.classList.add('tabActive');
});

workTab.addEventListener('click', ()=>{
    document.getElementById("education").classList.remove("qualificationActive");
    document.getElementById("work").classList.add("qualificationActive");
    educationTab.classList.remove('tabActive');
    workTab.classList.add('tabActive');
});

let swiper = new Swiper('.portfolioContainer', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.style = "bottom: 5rem"; else scrollUp.style = "bottom: -20%";
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Envoie...';

   const serviceID = 'default_service';
   const templateID = 'template_f7bo8gl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envoyer message';
      alert('Envoyer!');
    }, (err) => {
      btn.value = 'Envoyer message';
      alert(JSON.stringify(err));
    });
});