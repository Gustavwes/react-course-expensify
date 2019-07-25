export default (expenseList) => {

    return expenseList
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);

}