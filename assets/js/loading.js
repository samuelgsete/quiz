const div = document.createElement('div');

const spinnerSrc = new URL('../img/loading.png', document.currentScript.src).href;

div.innerHTML = `
    <div id="spinner" class="hide">
        <img class="loading" src="${spinnerSrc}" alt="Spinner Loading">
    </div>
`;

const body = document.querySelector('body');
body.appendChild(div);

const startLoading = () => {
    const spinner = document.querySelector('#spinner');
    spinner.classList.remove('hide');
}

const stopLoading = () => {
    const spinner = document.querySelector('#spinner');
    spinner.classList.add('hide');
}