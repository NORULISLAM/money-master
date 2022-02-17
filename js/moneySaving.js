document.getElementById('calc-btn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input')
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);

    //rent cost
    const rentInput = document.getElementById('rent-input')
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);

    //cloth cost
    const clothInput = document.getElementById('cloth-input')
    const clothAmountText = clothInput.value;
    const clothAmount = parseFloat(clothAmountText);
    //get total expenses
    const expensesTotal = document.getElementById('total-expenses');
    const expensesTotalText = expensesTotal.innerText;
    const previousExpensesTotal = parseFloat(expensesTotalText);
    expensesTotal.innerText = foodAmount + rentAmount + clothAmount;

    // get income 
    const incomeInput = document.getElementById('income-input')
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);
    // //get total expenses
    // const expensesInput = document.getElementById('total-expenses');
    // const expensesAmountText = expensesInput.value;
    // const expensesAmount = parseFloat(expensesAmountText);
    //get current blance
    const balanceTotal = document.getElementById('balance-update');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = incomeAmount - (foodAmount + rentAmount + clothAmount);

    //reset input field
    incomeInput.value = '';
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';



});

