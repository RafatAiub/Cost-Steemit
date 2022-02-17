// function refreshPage() {
//     location.reload();
//     break;
// }
function getInput(id) {
    const input = document.getElementById(id).value;
    if (input != typeof ('number')) {
        alert("please enter digits only");
    }

    const digits = parseInt(input);


    return digits;
}


const income = getInput('income');
const foodCost = getInput('food-cost');
const rentCost = getInput('rent-cost');
const clothCost = getInput('cloth-cost');



// -------calculate button ----------
document.getElementById('calculate').addEventListener('click', function () {
    // refreshPage();
    const totalExpenses = foodCost + rentCost + clothCost;
    const insert = document.getElementById('total-expenses');
    insert.innerText = totalExpenses;

    const balance = income - totalExpenses;
    const balanceInsert = document.getElementById('balance');
    balanceInsert.innerText = balance;

    if (typeof (foodCost) != 'number' && typeof (rentCost) != 'number' && typeof (clothCost) != 'number') {
        const show = document.getElementById('warning');
        show.innerText = "please enter digits only before calculate";
    }

});

// ----------------save button --------------------
document.getElementById('save').addEventListener('click', function () {
    // refreshPage();
    const balance = income - (foodCost + rentCost + clothCost);
    const savingPersent = getInput('percentage');
    const savingAmount = income * (savingPersent / 100);
    const savingInsert = document.getElementById('saving');
    savingInsert.innerText = savingAmount;

    const remainingBalance = balance - savingAmount;

    const remainingInsert = document.getElementById('remaining');
    remainingInsert.innerText = remainingBalance;


});




