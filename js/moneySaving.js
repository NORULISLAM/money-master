document.getElementById('calc-btn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input')
    const foodAmount = foodInput.value;
    //get total-food expenses
    const expensesTotal = document.getElementById('total-expenses');
    const expensesTotalText = expensesTotal.innerText;
    expensesTotal.innerText = foodAmount;


    //reset input field


    console.log(expensesTotalText);
})