function calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const conversionType = document.getElementById("conversionType").value;
  const resultText = document.getElementById("resultText");

  // Rates
  const robuxRateUsd = 38 / 10000; // 1 Robux in USD
  const usdToInr = 85;

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
