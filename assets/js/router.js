const goTo = (target, preserve = true) => {

    const params = new URLSearchParams(window.location.search);
   
    const url = new URL(target, window.location.href);

    if(preserve) {
        url.search = params.toString();
    }

    window.location.href = url;
}

const reload = () => location.reload();

const getQueryParam = (key) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}

const home = document.querySelector('#home');

if(home) {

    const menuSrc = new URL('../../menu.html', document.currentScript.src).href;

    home.addEventListener('click', (e) => { goTo(menuSrc); })
}