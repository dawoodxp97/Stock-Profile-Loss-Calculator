const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#is-submit");
const outputBox = document.querySelector("#output-box");
const confetti = document.querySelector("#confetti");
const rootElem = document.querySelector(":root");

function submitHandler(e) {
  e.preventDefault();
  const initpr = Number(initialPrice.value);
  const qnty = Number(stocksQuantity.value);
  const currpr = Number(currentPrice.value);
  calculateProfitAndLoss(initpr, qnty, currpr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    const loss = (initial - current) * quantity;
    const lossPercentage = ((loss / initial) * 100).toFixed(2);
    outputBox.innerHTML = `😢 Hey, the loss is ${loss} and the percent is ${lossPercentage}%`;
    rootElem.style.setProperty("--primary-color", "#DC2626");
  } else if (current > initial) {
    const profit = (current - initial) * quantity;
    const profitPercentage = ((profit / initial) * 100).toFixed(2);
    outputBox.innerHTML = `😎 Hey, the profit is ${profit} and the percent is ${profitPercentage}% 🔥`;
    rootElem.style.setProperty("--primary-color", "#34D399");
    runConfetti();
  } else {
    outputBox.innerHTML = `⚡️ No pain no gain and no gain no pain 🌝`;
    rootElem.style.setProperty("--primary-color", "#3B82F6");
  }
}

function runConfetti() {
  confetti.style.display = "block";
  setTimeout(function () {
    confetti.style.display = "none";
  }, 1100);
}

submitBtn.addEventListener("submit", submitHandler);
