// Récupérer l'élément select
var typeCalculSelect = document.getElementById("typeCalcul");

// Ajouter un gestionnaire d'événements pour l'événement change
typeCalculSelect.addEventListener("change", function() {
    // Récupérer la valeur sélectionnée
    var selectedValue = typeCalculSelect.value;

    // Rediriger en fonction de la valeur sélectionnée
    switch(selectedValue) {
        case "probabiliteUnique":
            window.location.href = "{% url 'probabilite_unique' %}";
            break;
        case "probabiliteMultiple":
            window.location.href = "{% url 'probabilite_multiple' %}";
            break;
        case "probabiliteDeuxEvenements":
            window.location.href = "{% url 'probabilite_deux_evenements' %}";
            break;
        case "probabiliteConditionnelle":
            window.location.href = "{% url 'probabilite_conditionnelle' %}";
            break;
        // Ajoutez d'autres cas selon vos besoins

        default:
            // Par défaut, rediriger vers une page par défaut
            window.location.href = "{% url 'probability_calculation' %}";
    }
});
