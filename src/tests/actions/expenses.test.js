import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object.', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'testNote' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'testNote'
        }
    });
});

test('Should setup add expense action object', () => {
    const expenseData = {
        description: 'testDescription',
        amount: 100,
        createdAt: 1000,
        note: 'testNote'
    }
    const action = addExpense(expenseData);

    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        }
    )
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            amount: 0,
            createdAt: 0,
            description: "",
            note: ""
        }
    });
});