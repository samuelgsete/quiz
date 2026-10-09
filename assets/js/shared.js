const carregarQuiz = async () => {
    const id_quiz = localStorage.getItem('id_teste');
    const quiz = await runGet(`quiz/${id_quiz}`);
    return quiz;
}

const getAluno = () => {
    const aluno = JSON.parse(localStorage.getItem('aluno'));
    return aluno;
}