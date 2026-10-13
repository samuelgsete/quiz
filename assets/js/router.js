const goTo = (target) => {
    window.location.href = target;
}

const reload = () => location.reload();

const home = document.querySelector('#home');

if(home) {

    const menuSrc = new URL('../../menu.html', document.currentScript.src).href;

    home.addEventListener('click', (e) => { goTo(menuSrc); })
}