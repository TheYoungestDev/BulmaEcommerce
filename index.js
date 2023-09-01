// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');

    const target = tab.dataset.target;
    // console.log(target);
    tabContentBoxes.forEach(box => {
      if (box.getAttribute('id') === target) {
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})

//modal
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');


signupButton.addEventListener('click', ()=>{
  console.log("clicked");
  modal.classList.add('is-active')
})

modalBg.addEventListener('click', ()=>{
  console.log("bg clicked")
  modal.classList.remove('is-active')
})

document.addEventListener('DOMContentLoaded', function () {
  const dockerSmall = document.querySelector('.docker-small');
  const dockerLarge = document.querySelector('.docker-large');
  const dockerSelector = document.querySelector('.docker-selector');

  // Function to update prices based on the selected option
  function updatePrices() {
    const selectedOption = dockerSelector.value;

    if (selectedOption === 'small') {
      dockerSmall.classList.remove('is-hidden');
      dockerLarge.classList.add('is-hidden');
    } else if (selectedOption === 'large') {
      dockerSmall.classList.add('is-hidden');
      dockerLarge.classList.remove('is-hidden');
    }
  }

  // Initial update based on the default selected option
  updatePrices();

  // Add event listener to the select box
  dockerSelector.addEventListener('change', updatePrices);
});

