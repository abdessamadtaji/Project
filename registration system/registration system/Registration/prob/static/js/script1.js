function calculerProbabilite() {
    const resultats = parseInt(document.getElementById('resultats').value);
    const evenements = parseInt(document.getElementById('evenements').value);

    const probabiliteA = evenements / resultats;
    const probabiliteAComplement = 1 - probabiliteA;

    document.getElementById('probabiliteA').innerText = probabiliteA.toFixed(2);
    document.getElementById('probabiliteAComplement').innerText = probabiliteAComplement.toFixed(2);

    // Afficher uniquement les résultats, masquer les champs de saisie et le bouton
    const resultatsProbabilite = document.getElementById('resultatsProbabilite');
    resultatsProbabilite.style.display = 'flex';

    const inputsAndButton = document.querySelectorAll('.calculator label, .calculator input, .calculator button');
    inputsAndButton.forEach(element => {
        element.style.display = 'none';
    });
}