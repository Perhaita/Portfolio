//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
            
        });
    });
});

//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//Scroll reveal animations
//Common reveal options 
ScrollReveal({ 
    distance: '60px',
    duration: 2500,
    delay: 100,
 });


//Target elements, and specify options
ScrollReveal().reveal('.home .info h2, .section-title-01', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.home .info .btn' ,{ delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li' ,{ delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img' ,{ delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right' ,{ delay: 500, origin: 'right' });
ScrollReveal().reveal('.contact-left h2' ,{ delay: 600, origin: 'left' });
ScrollReveal().reveal('.portfolio .img-card' ,{ delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer .group' ,{ delay: 500, origin: 'top', interval: 200 });


