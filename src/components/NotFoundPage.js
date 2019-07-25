import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h3>404 - Not found</h3>
        <Link to="/">Go home</Link>
    </div>
);


export default NotFoundPage;