// Initialize an empty array to store expenses
let expenses = [];

// Function to update the expense table and summary
function updateUI() {
  const tableBody = document.getElementById('expense-table-body');
  const totalExpenseElement = document.getElementById('total-expense');
  
  // Clear the existing table rows
  tableBody.innerHTML = '';
  
  // Calculate the total expenses
  let total = 0;
  
  expenses.forEach(expense => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.name}</td>
      <td>${expense.category}</td>
      <td>$${expense.amount.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
    total += expense.amount;
  });
  
  // Update the total expenses display
  totalExpenseElement.textContent = `$${total.toFixed(2)}`;
}

// Function to handle the form submission
document.getElementById('expense-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('expense-name').value;
  const category = document.getElementById('expense-category').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);
  
  // Validate the input
  if (name && category && !isNaN(amount) && amount > 0) {
    // Add the new expense to the array
    expenses.push({ name, category, amount });
    
    // Update the UI
    updateUI();
    
    // Clear the form fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-category').value = 'Food';
    document.getElementById('expense-amount').value = '';
  } else {
    alert('Please fill in all fields with valid values.');
  }
});
