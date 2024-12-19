const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const amount = document.getElementById("amount");
const result = document.getElementById("result");

// Fetch and populate currency options
async function fetchCurrencies() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD"); // Fetch exchange rates
    const data = await response.json();
    const currencies = Object.keys(data.rates); // Get currency codes (e.g., USD, INR)

    // Populate dropdowns
    currencies.forEach((currency) => {
      const optionFrom = document.createElement("option");
      const optionTo = document.createElement("option");
      optionFrom.value = optionTo.value = currency;
      optionFrom.textContent = optionTo.textContent = currency;
      fromCurrency.appendChild(optionFrom);
      toCurrency.appendChild(optionTo);
    });

    // Set default values
    fromCurrency.value = "USD";
    toCurrency.value = "INR";
  } catch (error) {
    result.textContent = "Error fetching currencies. Please try again later.";
  }
}

// Convert currency
async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amountValue = parseFloat(amount.value);

  if (!amountValue || amountValue <= 0) {
    result.textContent = "Please enter a valid amount.";
    return;
  }

  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await response.json();

    if (!data.rates[to]) {
      result.textContent = "Conversion rate not available.";
      return;
    }

    const convertedValue = (data.rates[to] * amountValue).toFixed(2);
    result.textContent = `${amountValue} ${from} = ${convertedValue} ${to}`;
  } catch (error) {
    result.textContent = "Error converting currency. Please try again later.";
  }
}

// Event listeners
convertBtn.addEventListener("click", convertCurrency);

// Initialize currencies on page load
fetchCurrencies();
