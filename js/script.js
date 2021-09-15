'use strict';

const menu = document.querySelector('.menu-btn');
const closeMenu = document.querySelector('.menu-close');
let isMenuOpen = false;

menu.addEventListener('click', function() {
    if (isMenuOpen == true) {
        document.querySelector('.menu-opened').style.display = 'none';
        setTimeout(() => {  document.querySelector('.menu-opened').style.opacity = '0'; }, 200);
        isMenuOpen = false;
    } else {
        document.querySelector('.menu-opened').style.display = 'flex';
        setTimeout(() => {  document.querySelector('.menu-opened').style.opacity = '1'; }, 200);
        isMenuOpen = true;
    }
})

closeMenu.addEventListener('click', function() {
    if (isMenuOpen == true) {
        document.querySelector('.menu-opened').style.display = 'none';
        setTimeout(() => {  document.querySelector('.menu-opened').style.opacity = '0'; }, 200);
        isMenuOpen = false;
    } else {
        document.querySelector('.menu-opened').style.display = 'flex';
        setTimeout(() => {  document.querySelector('.menu-opened').style.opacity = '1'; }, 200);
        isMenuOpen = true;
    }
})


document.querySelectorAll('.menu-link').forEach(btn => btn.addEventListener('click', function() {
    if (isMenuOpen == true) {
        document.querySelector('.menu-opened').style.display = 'none';
        setTimeout(() => {  document.querySelector('.menu-opened').style.opacity = '0'; }, 200);
        isMenuOpen = false;
    } else {
        document.querySelector('.menu-opened').style.display = 'flex';
        setTimeout(() => {  document.querySelector('.menu-opened').style.opacity = '1'; }, 200);
        isMenuOpen = true;
    }
}));


/* Store the element in el */
document.querySelectorAll('.service-item').forEach(el => el.addEventListener('mousemove', e => {
    let height = el.clientHeight;
    let width = el.clientWidth;

    const xVal = e.layerX
    /* Store the y position */
    const yVal = e.layerY

    const yRotation = 20 * ((xVal - width / 2) / width)
  
    /* Calculate the rotation along the X-axis */
    const xRotation = -20 * ((yVal - height / 2) / height)
  
    /* Generate string for CSS transform property */
    const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
    /* Apply the calculated transformation */
    el.style.transform = string

    el.addEventListener('mouseout', function() {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
  })
  
  /* Add listener for mousedown event, to simulate click */
  // el.addEventListener('mousedown', function() {
  //   el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
  // })
  
  /* Add listener for mouseup, simulate release of mouse click */
  // el.addEventListener('mouseup', function() {
  //   el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
  // })
}));
