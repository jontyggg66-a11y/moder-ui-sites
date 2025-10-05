function calculateEMI() {
  const loan = parseFloat(document.getElementById('loanAmount').value);
  const annualRate = parseFloat(document.getElementById('interestRate').value);
  const tenure = parseInt(document.getElementById('loanTenure').value);

  if (isNaN(loan) || isNaN(annualRate) || isNaN(tenure) || loan <= 0 || annualRate <= 0 || tenure <= 0) {
    alert("Please enter valid positive numbers in all fields.");
    return;
  }

  const monthlyRate = annualRate / 12 / 100;
  const emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - loan;

  document.getElementById('emiOutput').textContent = `Monthly EMI: ₹${emi.toFixed(2)}`;
  document.getElementById('totalInterest').textContent = `Total Interest: ₹${totalInterest.toFixed(2)}`;
  document.getElementById('totalPayment').textContent = `Total Payment: ₹${totalPayment.toFixed(2)}`;
  document.getElementById('resultBox').style.display = 'block';
}