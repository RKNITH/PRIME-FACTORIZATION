document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('factorForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let number = parseInt(document.getElementById('number').value);

        if (isNaN(number) || number <= 1) {
            alert('Please enter a valid number greater than 1.');
            return;
        }

        let primeFactors = findPrimeFactors(number);
        displayPrimeFactors(primeFactors);
    });
});

function findPrimeFactors(number) {
    let factors = [];
    let divisor = 2;

    while (number >= 2) {
        if (number % divisor === 0) {
            factors.push(divisor);
            number = number / divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

function displayPrimeFactors(factors) {
    let factorResult = document.getElementById('factorResult');
    factorResult.innerHTML = '';

    if (factors.length === 0) {
        factorResult.innerHTML = '<p>No prime factors found.</p>';
        return;
    }

    let factorsHTML = '<p>Prime Factors:</p><ul>';
    factors.forEach(function (factor) {
        factorsHTML += `<li>${factor}</li>`;
    });
    factorsHTML += '</ul>';

    factorResult.innerHTML = factorsHTML;
}
