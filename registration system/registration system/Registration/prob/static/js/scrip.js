function calculerProbabilite() {
    // Récupérer les valeurs saisies dans les champs de formulaire
    const probabiliteA = parseFloat(document.getElementById('probabiliteA').value);
    const probabiliteB = parseFloat(document.getElementById('probabiliteB').value);

    // Calculer différentes probabilités
    const probabiliteAComplement = 1 - probabiliteA;
    const probabiliteBComplement = 1 - probabiliteB;
    const probabiliteIntersection = probabiliteA * probabiliteB;
    const probabiliteUnion = probabiliteA + probabiliteB - probabiliteIntersection;
    const probabiliteSymDifference = Math.abs(probabiliteA - probabiliteB);
    const probabiliteUnionComplement = 1 - probabiliteUnion;
    const probabiliteAIntersectBComplement = probabiliteA - probabiliteIntersection;
    const probabiliteBIntersectAComplement = probabiliteB - probabiliteIntersection;

    // Afficher les résultats dans les éléments HTML correspondants
    document.getElementById('probabiliteAComplement').innerText = probabiliteAComplement.toFixed(2);
    document.getElementById('probabiliteBComplement').innerText = probabiliteBComplement.toFixed(2);
    document.getElementById('probabiliteIntersection').innerText = probabiliteIntersection.toFixed(2);
    document.getElementById('probabiliteUnion').innerText = probabiliteUnion.toFixed(2);
    document.getElementById('probabiliteSymDifference').innerText = probabiliteSymDifference.toFixed(2);
    document.getElementById('probabiliteUnionComplement').innerText = probabiliteUnionComplement.toFixed(2);
    document.getElementById('probabiliteAIntersectBComplement').innerText = probabiliteAIntersectBComplement.toFixed(2);
    document.getElementById('probabiliteBIntersectAComplement').innerText = probabiliteBIntersectAComplement.toFixed(2);

    // Afficher uniquement les résultats et masquer les champs de saisie et le bouton
    const resultatsProbabilite = document.getElementById('resultatsProbabilite');
    resultatsProbabilite.style.display = 'flex';

    const inputsAndButton = document.querySelectorAll('.calculator label, .calculator input, .calculator button');
    inputsAndButton.forEach(element => {
        element.style.display = 'none';
    });
}
