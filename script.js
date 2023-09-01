// script code for menus

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', ()=>{
navbarMenu.classList.toggle('is-active');
    });

    const tabContent = document.querySelector('#tab-content')
    const main = document.querySelector(".is-active")
    const productDetails = document.querySelector('#product-details');
    const deliveryInformation = document.querySelector('#delivery-information')
    
    productDetails.addEventListener('click', ()=>{
        deliveryInformation.classList.add("is-hidden");
        productDetails.classList.toggle('is-active');
        main.classList.toggle('is-hidden')
    })
    
    deliveryInformation.addEventListener('click', ()=>{
        productDetails.classList.add("is-hidden");
        deliveryInformation.classList.toggle('is-active');
        main.classList.toggle('is-hidden')
    })
    