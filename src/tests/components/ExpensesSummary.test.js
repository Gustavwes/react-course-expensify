import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={25}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render correctly with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={4} expensesTotal={2500}/>);
    expect(wrapper).toMatchSnapshot();
});