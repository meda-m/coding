// Riferimenti agli elementi HTML
const btn = document.getElementById("btn-calcola");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const soluzione1 = document.getElementById("soluzione1");
const soluzione2 = document.getElementById("soluzione2");

// Funzione per calcolare le soluzioni
function calcolaSoluzione() {
    let aI = parseFloat(a.value);
    let bI = parseFloat(b.value);
    let cI = parseFloat(c.value);

    // Reset delle classi animazione e del testo
    soluzione1.className = "";
    soluzione2.className = "";
    soluzione1.textContent = "";
    soluzione2.textContent = "";

    // Controllo input non validi
    if (isNaN(aI) || isNaN(bI) || isNaN(cI)) {
        soluzione1.textContent = "♠ INSERISCI PUNTATA VALIDA (NUMERI)";
        soluzione1.classList.add("anim-error");
        return;
    }

    // Controllo coefficiente 'a' uguale a zero
    if (aI === 0) {
        soluzione1.textContent = "♦ IL COEFFICIENTE 'A' NON PUÒ ESSERE 0";
        soluzione1.classList.add("anim-error");
        return;
    }

    let delta = (bI * bI) - (4 * aI * cI);

    if (delta > 0) {
        // Due soluzioni reali e distinte
        let x1 = ((-bI + Math.sqrt(delta)) / (2 * aI)).toFixed(2);
        let x2 = ((-bI - Math.sqrt(delta)) / (2 * aI)).toFixed(2);

        soluzione1.textContent = `♠ CARTA 1: X1 = ${x1}`;
        soluzione2.textContent = `♥ CARTA 2: X2 = ${x2}`;

        soluzione1.classList.add("anim-dual");
        soluzione2.classList.add("anim-dual");

    } else if (delta === 0) {
        // Una soluzione reale (coincidente)
        let x = (-bI / (2 * aI)).toFixed(2);

        soluzione1.textContent = `♣ PAIR: X1 = X2 = ${x}`;
        soluzione1.classList.add("anim-single");

    } else {
        // Nessuna soluzione reale
        soluzione1.textContent = "NIENTE IN MANO // Δ < 0 (NO REALS)";
        soluzione1.classList.add("anim-error");
    }
}

btn.addEventListener("click", calcolaSoluzione);