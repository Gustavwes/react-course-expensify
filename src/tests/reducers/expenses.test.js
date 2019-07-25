import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);

});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);

});

test('Should add an expense', () => {
    const expense = {        
            id: '109',
            description: 'new laptops',
            note: '',
            createdAt: 20000,
            amount: 295000
        
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses.concat(action.expense));
});

test('Should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
             amount
        }
    }
    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(action.updates.amount);

});

test('', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(state);
});
