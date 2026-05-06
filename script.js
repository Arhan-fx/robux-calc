let usdToInr = 95;

// Fetch live USD to INR rate
async function fetchExchangeRate() {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );

    const data = await response.json();
    usdToInr = data.rates.INR;

    console.log("Live USD to INR Rate:", usdToInr);
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
  }
}

// Load exchange rate when page opens
fetchExchangeRate();

function calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const conversionType = document.getElementById("conversionType").value;
  const resultText = document.getElementById("resultText");

  // 10k Robux = $38
  const robuxRateUsd = 38 / 10000;

  if (isNaN(amount) || amount <= 0) {
    resultText.innerHTML = "Result: Please enter a valid number";
    return;
  }

  let result;

  switch (conversionType) {
    case "robuxToUsd":
      result = `$${(amount * robuxRateUsd).toFixed(2)}`;
      break;

    case "usdToRobux":
      result = `${((amount / 38) * 10000).toFixed(0)} Robux`;
      break;

    case "robuxToInr":
      result = `₹${(amount * robuxRateUsd * usdToInr).toFixed(2)}`;
      break;

    case "inrToRobux":
      result = `${((amount / usdToInr / 38) * 10000).toFixed(0)} Robux`;
      break;

    default:
      result = "Invalid Conversion";
  }

  resultText.innerHTML = `Result: ${result}`;
}
