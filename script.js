// function refreshPage() {
//     location.reload();
//     break;
// }
function getInput(id) {
    const input = document.getElementById(id).value;
    const digits = parseFloat(input);
    return digits;
}

// -------calculate button ----------
document.getElementById('calculate').addEventListener('click', function () {
    // refreshPage();
    const income = getInput('income');
    const foodCost = getInput('food-cost');
    const rentCost = getInput('rent-cost');
    const clothCost = getInput('cloth-cost');
    const failError = document.getElementById('notify-fail');
    const totalExpenses = foodCost + rentCost + clothCost;
    const insert = document.getElementById('total-expenses');

    const balance = income - totalExpenses;
    const balanceInsert = document.getElementById('balance');
    const IncomeWithExpense = document.getElementById('compare');


    if (isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)) {
        insert.innerText = '';
        balanceInsert.innerText = '';
        failError.style.display = 'block';
    } else {
        insert.innerText = totalExpenses;
        balanceInsert.innerText = balance;
        failError.style.display = 'none'
        //---------condition expense must be less than income ----------------
        if (totalExpenses > income) {
            insert.innerText = '';
            balanceInsert.innerText = '';
            IncomeWithExpense.style.display = 'block';
        }
    }
});

// ----------------save button --------------------//
document.getElementById('save').addEventListener('click', function () {
    // refreshPage();
    const income = getInput('income');
    const foodCost = getInput('food-cost');
    const rentCost = getInput('rent-cost');
    const clothCost = getInput('cloth-cost');
    const balance = income - (foodCost + rentCost + clothCost);
    const savingPersent = getInput('percentage');
    const savingAmount = income * (savingPersent / 100);
    const savingInsert = document.getElementById('saving');
    const percentageError = document.getElementById('notify-percentage');

    const exceedMessage = document.getElementById('exceed');

    const remainingBalance = balance - savingAmount;

    const remainingInsert = document.getElementById('remaining');

    if (savingAmount > balance) {
        exceedMessage.style.display = 'block';
        remainingInsert.innerText = '';
        savingInsert.innerText = '';

    }
    else {
        exceedMessage.style.display = 'none';
        remainingInsert.innerText = remainingBalance;
        savingInsert.innerText = savingAmount;
    }
    if (isNaN(savingPersent)) {

        percentageError.style.display = 'block';
        remainingInsert.innerText = '';
        savingInsert.innerText = '';
    }
    else {
        if (savingPersent > 0 && savingPersent < 100) {
            percentageError.style.display = 'none';
            remainingInsert.innerText = remainingBalance;
            savingInsert.innerText = savingAmount;
        }
        else {
            percentageError.style.display = 'block';
            remainingInsert.innerText = '';
            savingInsert.innerText = '';
        }

    }


});




