import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route
                    component={ExpenseDashboardPage}
                    exact={true}
                    path="/"
                />
                <Route
                    component={AddExpensePage}
                    path="/create"
                />
                <Route
                    component={EditExpensePage}
                    path="/edit/:id"
                />
                <Route
                    component={HelpPage}
                    path="/help"
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;