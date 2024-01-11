let income = 0;
let expenses = {
  medical: 0,
  home: 0,
  entertainment: 0,
  savings: 0,
  education: 0,
};

function addIncome() {
  income = parseFloat(document.getElementById("income").value) || 0;
  updateTotalExpenses();
  document.getElementById(
    "recordedIncome"
  ).innerHTML = `Ingresos registrados: $${income}`;
}

function addExpense(category) {
  const expenseAmount =
    parseFloat(document.getElementById(`${category}Expenses`).value) || 0;
  expenses[category] += expenseAmount;
  updateTotalExpenses();
  checkFinancialHealth();
}

function updateTotalExpenses() {
  const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);
  document.getElementById(
    "totalExpenses"
  ).innerHTML = `Total de Gastos: $${totalExpenses.toFixed(2)}`;
}

function checkFinancialHealth() {
  const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);

  if (totalExpenses === income) {
    const maxCategory = getMaxCategory();
    document.getElementById(
      "adviceMessage"
    ).innerHTML = `¡Bien! Gastaste $${totalExpenses} de tus ingresos registrados. Considera reducir gastos en la categoría ${maxCategory}.`;
  } else if (totalExpenses < income) {
    document.getElementById(
      "adviceMessage"
    ).innerHTML = `¡Felicidades! Estás gastando $${totalExpenses} de tus ingresos registrados. Sigue así.`;
  } else {
    document.getElementById(
      "adviceMessage"
    ).innerHTML = `Cuidado, estás gastando $${totalExpenses} de tus ingresos registrados. Considera ajustar tus gastos para mejorar tu salud financiera.`;
  }
}

function getMaxCategory() {
  let maxCategory = "";
  let maxAmount = 0;

  for (const category in expenses) {
    if (expenses[category] > maxAmount) {
      maxAmount = expenses[category];
      maxCategory = category;
    }
  }

  return maxCategory;
}
