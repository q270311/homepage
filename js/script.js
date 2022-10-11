console.log("Pozdrawiam uczestników kursu Frontend Developer od podstaw. Wrzesień 2022");

let sSuchar1 = document.getElementById("sSuchar1");
let sSuchar2 = document.getElementById("sSuchar2");
let sSuchar3 = document.getElementById("sSuchar3");

let bSuchar1 = document.getElementById("bSuchar1");
let bSuchar2 = document.getElementById("bSuchar2");
let bSuchar3 = document.getElementById("bSuchar3");

bSuchar1.addEventListener("click", () => {
    bSuchar1.remove();
    sSuchar1.innerText = "Co mówi informatyk po ślubie? - Pobieranie zakończone."
});
bSuchar2.addEventListener("click", () => {
    bSuchar2.remove();
    sSuchar2.innerText = "Jaką witaminę zażywa informatyk? - C++"
});
bSuchar3.addEventListener("click", () => {
    bSuchar3.remove();
    sSuchar3.innerText = "Jak najczęściej informatycy zwracają się do swoich żon? - Myszko..."
});