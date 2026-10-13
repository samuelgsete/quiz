const carregarQuiz = async () => {
    const id_quiz = localStorage.getItem('id_quiz');
    const quiz = await runGet(`quiz/${id_quiz}`);
    return quiz;
}

const getAluno = () => {
    const aluno = JSON.parse(localStorage.getItem('aluno'));
    return aluno;
}

const escapeHTML = (str) =>
    String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');


const play = (som) => 
{
    const audio = new Audio(`../assets/midia/${som}.mp3`);
    audio.play().catch(() => {});
}