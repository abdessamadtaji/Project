function calculateStatistics() {
    // Masquer le bouton "Calculer"
    document.querySelector('.form-group button').style.display = "none";

    // Afficher le conteneur des résultats
    document.querySelector('.result-container').style.display = "block";

    // Ajuster la taille du conteneur .main en fonction du nombre de résultats
    const resultCount = 11; // Nombre de résultats dans l'exemple
    const newHeight = 300 + (resultCount * 20); // Ajustez cette valeur selon vos besoins
    const newWidth = 500; // Ajustez cette valeur selon vos besoins
    document.querySelector('.main').style.height = newHeight + 'px';
    document.querySelector('.main').style.width = newWidth + 'px';

    // Get the input values and split them by commas
    const inputNumbers = document.getElementById("inputNumbers").value;
    const numbersArray = inputNumbers.split(",").map(Number);

    // Calculate statistics
    const count = numbersArray.length;
    const sum = numbersArray.reduce((a, b) => a + b, 0);
    const mean = sum / count;
    const sortedNumbers = [...numbersArray].sort((a, b) => a - b);
    const median = count % 2 === 0
        ? (sortedNumbers[count / 2 - 1] + sortedNumbers[count / 2]) / 2
        : sortedNumbers[Math.floor(count / 2)];
    const mode = getMode(numbersArray);
    const largest = Math.max(...numbersArray);
    const smallest = Math.min(...numbersArray);
    const range = largest - smallest;
    const geometricMean = getGeometricMean(numbersArray);
    const stdDeviation = getStandardDeviation(numbersArray);
    const variance = getVariance(numbersArray);

    // Display results
    document.getElementById("countResult").textContent = count;
    document.getElementById("sumResult").textContent = sum;
    document.getElementById("meanResult").textContent = mean.toFixed(2)
    document.getElementById("medianResult").textContent = median;
    document.getElementById("modeResult").textContent = mode;
    document.getElementById("largestResult").textContent = largest;
    document.getElementById("smallestResult").textContent = smallest;
    document.getElementById("rangeResult").textContent = range;
    document.getElementById("geometricMeanResult").textContent = geometricMean.toFixed(2);
    document.getElementById("stdDeviationResult").textContent = stdDeviation.toFixed(2);
    document.getElementById("varianceResult").textContent = variance.toFixed(2);
}


function getMode(arr) {
    const counts = {};
    let maxCount = 0;
    let mode = [];
    arr.forEach((num) => {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mode = [num];
        } else if (counts[num] === maxCount) {
            mode.push(num);
        }
    });
    return mode.join(", ");
}

function getGeometricMean(arr) {
    const product = arr.reduce((acc, num) => acc * num, 1);
    return Math.pow(product, 1 / arr.length);
}

function getVariance(arr) {
    const mean = arr.reduce((acc, num) => acc + num, 0) / arr.length;
    const squaredDifferences = arr.map((num) => Math.pow(num - mean, 2));
    return squaredDifferences.reduce((acc, diff) => acc + diff, 0) / (arr.length - 1);
}

function getStandardDeviation(arr) {
    return Math.sqrt(getVariance(arr));
}