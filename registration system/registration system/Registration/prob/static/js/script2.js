function calculerProbabilite() {
    const resultats = parseInt(document.getElementById('resultats').value);
    const evenementsA = parseInt(document.getElementById('evenementsA').value);
    const evenementsB = parseInt(document.getElementById('evenementsB').value);

    const probabiliteA = evenementsA / resultats;
    const probabiliteAComplement = 1 - probabiliteA;

    const probabiliteB = evenementsB / resultats;
    const probabiliteBComplement = 1 - probabiliteB;

    const probabiliteIntersection = (evenementsA * evenementsB) / resultats;
    const probabiliteUnion = probabiliteA + probabiliteB - probabiliteIntersection;
    const probabiliteConditionnelle = evenementsB !== 0 ? (probabiliteIntersection / probabiliteB).toFixed(4) : 'Indéfini';

    // Création du contenu des résultats
    const resultatHTML = `
        <div class="resultat result-row">
            <div class="probability-info">
                <img class="probability-image" src="image1.png">
                <p><strong>Probabilité d'événement qui se produit P (A):</strong> ${probabiliteA.toFixed(4)}</p>
            </div>
        </div>
        <div class="resultat result-row">
            <div class="probability-info">
                <img class="probability-image" src="image2.png">
                <p><strong>Probabilité d'événement qui ne se produit pas P (A '):</strong> ${probabiliteAComplement.toFixed(4)}</p>
            </div>
        </div>
        <div class="resultat result-row">
            <div class="probability-info">
                <img class="probability-image" src="image3.png">
                <p><strong>Probabilité que l'événement B se produise P (B):</strong> ${probabiliteB.toFixed(4)}</p>
            </div>
        </div>
        <div class="resultat result-row">
            <div class="probability-info">
                <img class="probability-image" src="image4.png">
                <p><strong>Probabilité que l'événement B ne se produise pas P (B '):</strong> ${probabiliteBComplement.toFixed(4)}</p>
            </div>
        </div>
        <div class="resultat result-row">
            <div class="probability-info">
                <img class="probability-image" src="image5.png">
                <p><strong>Probabilité que les deux événements se produisent P (A ∩ B):</strong> ${probabiliteIntersection.toFixed(4)}</p>
            </div>
        </div>
        <div class="resultat result-row">
            <div class="probability-info">
                <img class="probability-image" src="image6.png">
                <p><strong>Probabilité que l'un ou l'autre des événements se produise P (A ∪ B):</strong> ${probabiliteUnion.toFixed(4)}</p>
            </div>
        </div>
        <div class="resultat result-row">
            <div class="probability-info">
                <img class="probability-image" src="image7.png">
                <p><strong>Probabilité conditionnelle P (A | B):</strong> ${probabiliteConditionnelle}</p>
            </div>
        </div>
    `;

    // Afficher les résultats
    const resultatsContainer = document.getElementById('resultatsContainer');
    resultatsContainer.innerHTML = resultatHTML;
    resultatsContainer.style.display = 'block';  // Afficher le conteneur des résultats

    // Masquer les éléments de saisie et le bouton
    const inputsAndButton = document.getElementById('inputsAndButton');
    inputsAndButton.style.display = 'none';
}
