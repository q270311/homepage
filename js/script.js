{
    const welcome = () => {
        console.log("Pozdrawiam uczestników kursu Frontend Developer od podstaw. Wrzesień 2022");
    }
    const showAnswer = (spanElement, buttonElement, answerTheQuestion) => {
        buttonElement.remove();
        spanElement.innerText += answerTheQuestion;
    }
    const init = () => {
        const spanSuchar1 = document.getElementById("spanSuchar1");
        const buttonSuchar1 = document.getElementById("buttonSuchar1");
        buttonSuchar1.addEventListener("click", () => {
            showAnswer(spanSuchar1, buttonSuchar1, " - Pobieranie zakończone.")
        });

        const spanSuchar2 = document.getElementById("spanSuchar2");
        const buttonSuchar2 = document.getElementById("buttonSuchar2");
        buttonSuchar2.addEventListener("click", () => {
            showAnswer(spanSuchar2, buttonSuchar2, " - C++.");
        });

        const spanSuchar3 = document.getElementById("spanSuchar3");
        const buttonSuchar3 = document.getElementById("buttonSuchar3");
        buttonSuchar3.addEventListener("click", () => {
            showAnswer(spanSuchar3, buttonSuchar3, " - Myszko...");
        });
    }

    welcome();
    init();
}