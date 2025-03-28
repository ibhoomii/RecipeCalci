document.addEventListener("DOMContentLoaded", function () {
    showTab("measurement");
});

// Function to switch between tabs
function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    
    document.getElementById(tabId).classList.add("active");
    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add("active");
}

// Function to convert measurement values
function convertMeasurement() {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultText = document.getElementById("result");

    let conversionRates = {
        grams: { ounces: 0.0353, pounds: 0.0022, cups: 0.0042 },
        ounces: { grams: 28.35, pounds: 0.0625, cups: 0.125 },
        pounds: { grams: 453.6, ounces: 16, cups: 2 },
        cups: { grams: 240, ounces: 8, pounds: 0.5 }
    };

    if (fromUnit === toUnit) {
        resultText.innerText = `Result: ${inputValue} ${toUnit}`;
    } else {
        let convertedValue = inputValue * (conversionRates[fromUnit][toUnit] || 1);
        resultText.innerText = `Result: ${convertedValue.toFixed(2)} ${toUnit}`;
    }
}

// Function to scale recipes
function scaleRecipe() {
    let scaleFactor = parseFloat(document.getElementById("scaleFactor").value);
    let resultText = document.getElementById("scaledResult");

    if (!isNaN(scaleFactor) && scaleFactor > 0) {
        resultText.innerText = `Scale your recipe by ${scaleFactor}x`;
    } else {
        resultText.innerText = "Enter a valid scale factor!";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    function convertMeasurement() {
        let ingredient = document.getElementById("ingredient").value.trim().toLowerCase();
        let amount = parseFloat(document.getElementById("amount").value);
        let resultField = document.getElementById("result");

        if (!ingredient || isNaN(amount)) {
            resultField.innerText = "Please enter a valid ingredient and amount.";
            return;
        }

        // Example ingredient densities (grams per cup)
        let densities = {
            "flour": 120, // 1 cup = 120g
            "sugar": 200, // 1 cup = 200g
            "butter": 227, // 1 cup = 227g
            "milk": 240 // 1 cup = 240g
        };

        if (ingredient in densities) {
            let convertedAmount = amount * densities[ingredient]; // Assuming input is in cups
            resultField.innerText = `${convertedAmount.toFixed(2)} grams`;
        } else {
            resultField.innerText = "Ingredient not found. Go to the convert option for better results";
        }
    }

    // Attach function to global scope so it can be accessed from inline onclick
    window.convertMeasurement = convertMeasurement;
});
