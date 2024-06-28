
function loanTermMonth(monthlyCalc) {
    document.getElementById("loanAmount").placeholder = "50,000 and above";
    document.getElementById("interestRate").value = "4.5";
    document.getElementById("durationLabel").innerHTML = "M";
    let defaultLoanDuration = document.getElementById("loanDuration");
    defaultLoanDuration.value = "3";
    defaultLoanDuration.placeholder = "3 - 9 Months";
    monthlyCalc();
    
}
function loanTermDaily(dailyCalc) {
    document.getElementById("loanAmount").placeholder = "50,000 - 1,000,000";
    document.getElementById("interestRate").value = "9.5";
    document.getElementById("durationLabel").innerHTML = "D";
    let defaultLoanDuration = document.getElementById("loanDuration");
    defaultLoanDuration.value = "20";
    // defaultLoanDuration.setAttribute("readonly", "readonly");
    defaultLoanDuration.placeholder = "20 Days";
    dailyCalc();
}

function dailyCalc() {
    let loanAmount = document.getElementById("loanAmount");
    let interestRate = document.getElementById("interestRate").value;
    let loanDuration = document.getElementById("loanDuration"); 
    let showTotalInterest = document.getElementById("showTotalInterest");
    let showLoanDuration = document.getElementById("showLoanDuration");
    let showRegularPayment = document.getElementById("showRegularPayment");
    let showTotalPayment = document.getElementById("showTotalPayment");
    loanDuration.setAttribute("readonly", "readonly");
    document.getElementById("duration-error-message").innerHTML = "";
    loanAmount.addEventListener("input", calDaily);
    function calDaily() {
        if (loanAmount.value.length < 1 || +(loanAmount.value) < 5e4 || +(loanAmount.value) > 1e6) {
            document.getElementById("amount-error-message").innerHTML = "Kindly input amount between 50,000 and 1,000,000";
        } else {
            document.getElementById("amount-error-message").innerHTML = " ";
        }
        document.getElementById("duration-error-message").innerHTML = "";
        let loanDurationValue = loanDuration.value;
        let newLoanAmount = +(loanAmount.value);
        // Calculate Interest Amount
        let interest = newLoanAmount * (parseFloat(interestRate) / 100);
        showTotalInterest.innerHTML = "₦" + interest.toLocaleString();
        
        // Display Loan Duration
        showLoanDuration.innerHTML = loanDurationValue;
        // Display Regular Repayment
        let regularRepayment = ((newLoanAmount + interest) / +(loanDurationValue)).toFixed(2);
         regularRepayment = parseFloat(regularRepayment);
        showRegularPayment.innerHTML = "₦" + regularRepayment.toLocaleString();
        // Display Total Payment (Principal + Interest)
        let totalPayment = newLoanAmount + interest;
        showTotalPayment.innerHTML = "₦" + totalPayment.toLocaleString();

    }
}

function monthlyCalc() {
    let loanAmount = document.getElementById("loanAmount");
    let interestRate = document.getElementById("interestRate").value;
    let loanDuration = document.getElementById("loanDuration"); 
    let showTotalInterest = document.getElementById("showTotalInterest");
    let showLoanDuration = document.getElementById("showLoanDuration");
    let showRegularPayment = document.getElementById("showRegularPayment");
    let showTotalPayment = document.getElementById("showTotalPayment");
    loanDuration.removeAttribute("readonly");
    loanAmount.addEventListener("input", calMonth);
    loanDuration.addEventListener("input", calMonth);
    function calMonth() {
        if (loanAmount.value.length < 1 || +(loanAmount.value) < 5e4) {
            document.getElementById("amount-error-message").innerHTML = "Kindly input amount from 50,000 and above";
        } else {
            document.getElementById("amount-error-message").innerHTML = " ";
        }
        let loanDurationValue = loanDuration.value;
        if (+(loanDurationValue) < 3 || +(loanDurationValue) > 9) {
            document.getElementById("duration-error-message").innerHTML = "Loan duration is within 3 - 9 Months";
        } else {
            document.getElementById("duration-error-message").innerHTML = "";
        }
        let newLoanAmount = +(loanAmount.value);
        // Calculate Interest Amount
        let interest = newLoanAmount * (parseFloat(interestRate) / 100);
        showTotalInterest.innerHTML = "₦" + interest.toLocaleString();
        
        // Display Loan Duration
        showLoanDuration.innerHTML = loanDurationValue;
        // Display Regular Repayment
        let regularRepayment = ((newLoanAmount + interest) / +(loanDurationValue)).toFixed(2);
         regularRepayment = parseFloat(regularRepayment);
        showRegularPayment.innerHTML = "₦" + regularRepayment.toLocaleString();
        // Display Total Payment (Principal + Interest)
        let totalPayment = newLoanAmount + interest;
        showTotalPayment.innerHTML = "₦" + totalPayment.toLocaleString();

    }
    
}
monthlyCalc();