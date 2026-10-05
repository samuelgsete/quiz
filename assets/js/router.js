const goTo = (target) => {
    window.location.href = target;
}

const reload = () => location.reload();

const home = document.querySelector('#home');
home.addEventListener('click', (e) => {
    goTo('../../menu.html');
})