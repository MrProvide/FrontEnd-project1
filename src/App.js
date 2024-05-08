import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import IntroductionPage from './IntroductionPage';
import PlanConfiguration from './PlanConfiguration';
import RecipeSelector from './RecipeSelector';
import DeliveryInfoForm from './DeliveryInfoForm';
import RecipeList from './RecipeList'; 
import CreateRecipePage from './CreateRecipePage';
import LoginForm from './LoginFrom';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/plan-configuration" element={<PlanConfiguration />} />
          <Route path="/add-recipe" element={<CreateRecipePage />} />
          <Route path="/recipe-selector" element={<RecipeSelector />} />
          <Route path="/delivery-info" element={<DeliveryInfoForm/>} />
          <Route path="/recipes" element={<RecipeList />} /> 
          <Route path="/login" element={<LoginForm />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;



