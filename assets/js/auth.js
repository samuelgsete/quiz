const aluno = JSON.parse(localStorage.getItem('aluno'));

if(!aluno) {
    alert('Faça login para continuar');
    window.location.href = '../../index.html';
}

const sair = () => {
    localStorage.removeItem('acertos');
    localStorage.removeItem('erros');
    localStorage.removeItem('total_perguntas');
    localStorage.removeItem('nota');
    localStorage.removeItem('aluno');
    localStorage.removeItem('perguntas');
    localStorage.removeItem('id_teste');

    goTo('../index.html')
}

const getUsuario = () => {
    const arr = aluno.nome.split(' ');
    const primeiroNome = arr[0];
    return primeiroNome;
}