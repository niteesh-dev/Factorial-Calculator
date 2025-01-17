function validateInput(input) {
    return Number.isInteger(input) && input >= 0 && input <= 170;
}

function calculateFactorialIterative(n) {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}

function calculateFactorialRecursive(n) {
    if (n <= 1) return BigInt(1);
    return BigInt(n) * calculateFactorialRecursive(n - 1);
}

function showResult(input, result, method) {
    const resultDiv = document.getElementById('result');
    const methodUsed = document.getElementById('method-used');
    const inputNumber = document.getElementById('input-number');
    const factorialResult = document.getElementById('factorial-result');

    methodUsed.textContent = method;
    inputNumber.textContent = input;
    factorialResult.textContent = result.toString();
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('animate__animated', 'animate__fadeIn');
}

document.getElementById('iterative-btn').addEventListener('click', function () {
    const input = parseInt(document.getElementById('number').value);
    const validationMessage = document.getElementById('validation-message');

    if (!validateInput(input)) {
        validationMessage.classList.remove('hidden');
        return;
    }

    validationMessage.classList.add('hidden');
    const result = calculateFactorialIterative(input);
    showResult(input, result, 'Iterative');
});

document.getElementById('recursive-btn').addEventListener('click', function () {
    const input = parseInt(document.getElementById('number').value);
    const validationMessage = document.getElementById('validation-message');

    if (!validateInput(input)) {
        validationMessage.classList.remove('hidden');
        return;
    }

    validationMessage.classList.add('hidden');
    const result = calculateFactorialRecursive(input);
    showResult(input, result, 'Recursive');
});



// ---------------> this another section of css

function factorialIterative(n) {
    if (n < 0) return "Invalid input";
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  function factorialRecursive(n) {
    if (n < 0) return "Invalid input";
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }

  function calculateIterative() {
    const input = document.getElementById('numberInput').value;
    const startTime = performance.now();
    const result = factorialIterative(parseInt(input));
    const endTime = performance.now();

    document.getElementById('iterativeResult').textContent = result;
    document.getElementById('iterativeTime').textContent =
      `Time: ${(endTime - startTime).toFixed(4)} ms`;
  }

  function calculateRecursive() {
    const input = document.getElementById('numberInput').value;
    const startTime = performance.now();
    const result = factorialRecursive(parseInt(input));
    const endTime = performance.now();

    document.getElementById('recursiveResult').textContent = result;
    document.getElementById('recursiveTime').textContent =
      `Time: ${(endTime - startTime).toFixed(4)} ms`;
  }

  // Add input validation
  document.getElementById('numberInput').addEventListener('input', function (e) {
    const value = parseInt(e.target.value);
    if (value > 170) {
      alert('Please enter a number less than or equal to 170 to avoid overflow');
      e.target.value = 170;
    }
    if (value < 0) {
      e.target.value = 0;
    }
  });