import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';


test('Should return 0 if no expense', () => {
    const result = selectExpensesTotal([]);

    expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);

    expect(result).toBe(195);
});

test('Should correctly add up all expenses in an array of expenses', () => {
    const result = selectExpensesTotal(expenses);

    expect(result).toBe(114195);
});