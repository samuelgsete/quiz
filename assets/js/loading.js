const div = document.createElement('div');
div.innerHTML = `
    <div id="spinner" class="hide">
        <img class="loading" src="../assets/img/loading.png" alt="Spinner Loading">
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