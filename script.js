function checkAnswers() {
    const correctAnswers = ["Pobreza", "Desigualdade de Renda", "Violência", "Fome"];
    const form = document.getElementById('quiz-form');
    const checkboxes = form.querySelectorAll('input[name="problemas"]:checked');
    
    const userAnswers = Array.from(checkboxes).map(checkbox => checkbox.value);
    let correctCount = 0;

    userAnswers.forEach(answer => {
        if (correctAnswers.includes(answer)) {
            correctCount++;
        }
    });

    const result = document.getElementById('result');
    if (correctCount === correctAnswers.length && checkboxes.length === correctAnswers.length) {
        result.innerHTML = `<p><strong>Parabéns!</strong> Todas as suas respostas estão corretas.</p>`;
    } else {
        result.innerHTML = `<p><strong>Respostas Incorretas.</strong> A resposta correta é:</p>
                            <ul>
                                ${correctAnswers.map(ans => `<li>${ans}</li>`).join('')}
                            </ul>`;
    }
}
