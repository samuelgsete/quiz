const carregarQuiz = async () => {
    const id_quiz = localStorage.getItem('id_teste');
    const quiz = await runGet(`quiz/${id_quiz}`);
    return quiz;
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