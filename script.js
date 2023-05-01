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