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

        // Updated ingredient densities (grams per cup)
        let densities = {
            "flour": 120,       // 1 cup = 120g
            "sugar": 200,       // 1 cup = 200g
            "butter": 227,      // 1 cup = 227g
            "milk": 240,        // 1 cup = 240g
            "honey": 340,       // 1 cup = 340g
            "oil": 218,         // 1 cup = 218g
            "rice": 195,        // 1 cup = 195g
            "oats": 90,         // 1 cup = 90g
            "cocoa powder": 125,// 1 cup = 125g
            "cheese": 113,      // 1 cup shredded = 113g
            "yogurt": 245,      // 1 cup = 245g
            "cornstarch": 128,  // 1 cup = 128g
            "peanut butter": 258,// 1 cup = 258g
            "salt": 288,        // 1 cup = 288g
            "baking powder": 192// 1 cup = 192g
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
