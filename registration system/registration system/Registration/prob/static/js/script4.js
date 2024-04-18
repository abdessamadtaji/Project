function calculerProbabiliteConditionnelle() {
    const probabiliteIntersection = parseFloat(document.getElementById('probabiliteIntersection').value);
    const probabiliteB = parseFloat(document.getElementById('probabiliteB').value);

    const probabiliteConditionnelle = probabiliteIntersection / probabiliteB;

    // Création du contenu des résultats
    const resultatHTML = `
        <div class="probability-info">
            <img class="result-image" src="tswira.png" alt="Result Image">
            <p><strong>Probabilité conditionnelle P(A|B):</strong> ${probabiliteConditionnelle.toFixed(4)}</p>
        </div>
    `;

    // Afficher les résultats
    const resultatsProbabiliteConditionnelle = document.getElementById('resultatsProbabiliteConditionnelle');
    resultatsProbabiliteConditionnelle.innerHTML = resultatHTML;
    resultatsProbabiliteConditionnelle.style.display = 'flex';  // Afficher le conteneur des résultats

    // Masquer les éléments de saisie et le bouton
    const inputsAndButton = document.querySelectorAll('.calculator label, .calculator input, .calculator button');
    inputsAndButton.forEach(element => {
        element.style.display = 'none';
    });
}
