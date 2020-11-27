const loading = document.getElementById('loading');
const reload = document.getElementById('reload');
const background = document.getElementById('background');

const animateLoadingBar = setInterval(() => {
    const widthComputedStyle = getComputedStyle(loading);
    const widthValue =parseFloat(widthComputedStyle.getPropertyValue("--width")) || 0;
    loading.style.setProperty("--width", widthValue + .3);

    const blurComputedStyle = getComputedStyle(background);
    const blurValue = parseFloat(blurComputedStyle.getPropertyValue("--blur")) || 100;
    background.style.setProperty("--blur", blurValue - .3);
    console.log(blurValue);
    background.style.filter = `blur(${blurValue}px)`;
    if(blurValue === 100) {
        background.style.filter = "blur(0px)";
    }
    if(widthValue === 100) {
        clearInterval(animateLoadingBar);
    }; 
}, 5);

reload.addEventListener('click', () => {
    loading.style.setProperty("--width", 0);
    location.reload();
});