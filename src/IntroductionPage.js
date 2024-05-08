import React from 'react';
import { Link } from 'react-router-dom';

const IntroductionPage = () => {
    return (
        <div>
            <h2>Welcome to Intro page!</h2>
            <p>This is where we add something.</p>
            <Link to="/plan-configuration">Create your own plan(for testing)</Link>
            <Link to="/add-recipe">Add a new recipe (for testing)</Link> 
        </div>
    );
};

export default IntroductionPage;
