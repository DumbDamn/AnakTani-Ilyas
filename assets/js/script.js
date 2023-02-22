// On Scroll Navbar
document.addEventListener('scroll', () =>{
  const navbar = document.querySelector('nav');
  
  if (window.scrollY > 600) {
    navbar.classList.add('scrolled');
  }else {
    navbar.classList.remove('scrolled');
  }
})

// Menu Active
const navbar = document.querySelector('.navbar-menu');
const hamburgerMenu = document.querySelector('.fa-bars');

document.querySelector('#hamburger-menu').onclick = () => {
  navbar.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
};

document.addEventListener('click', function(e){
  if (!hamburgerMenu.contains(e.target) && !navbar.contains(e.target)){
    navbar.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  }
})



// Scroll Item
document.addEventListener('scroll', reveal);

function reveal () {
  let reveals = document.querySelectorAll('.reveals');

  for (let i = 0; i <  reveals.length; i++){

    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('revealactive');
    }else{
      reveals[i].classList.remove('revealactive');
    }
  }
}