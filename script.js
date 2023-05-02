const allContent = document.querySelector('.content');
const contrastButton = document.getElementById('contrast-button');
let controlButton = false

contrastButton.addEventListener('click', () => {
    if (controlButton === false) {
        allContent.style.background = 'white';
        allContent.style.color = 'black';
        controlButton = true;
    } else {
        allContent.style.background = 'black';
        allContent.style.color = 'purple';
        controlButton = false
    }
});

const btn = document.getElementById("top");

btn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
