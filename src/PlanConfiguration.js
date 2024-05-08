import React, { useState } from 'react';

const PlanConfiguration = () => {
  const [preferences, setPreferences] = useState({
    cuisine: '', 
    diet: '', 
    calorieLimit: 2000, // Papildoma: kalorijų limitas
    difficultyLevel: 'Easy', // Papildoma: sunkumo lygis
    category: '', // Papildoma: kategorija
  });

  const [planSize, setPlanSize] = useState({
    numberOfPeople: 1, 
    mealsPerWeek: 3, 
  });

  const handlePreferencesChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handlePlanSizeChange = (e) => {
    const { name, value } = e.target;
    setPlanSize({ ...planSize, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Preferences:', preferences);
    console.log('Plan size:', planSize);
    window.location.href = '/recipe-selector'
  };
  const total = planSize.numberOfPeople * planSize.mealsPerWeek;

  return (
    <div>
      <h2>Choose Your Preferences</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cuisine:</label>
          <select name="cuisine" value={preferences.cuisine} onChange={handlePreferencesChange}></select>
        </div>
        <div>
          <label>Diet:</label>
          <select name="diet" value={preferences.diet} onChange={handlePreferencesChange}></select>
        </div>
        <div>
          <label>Calorie Limit:</label>
          <input type="number" name="calorieLimit" value={preferences.calorieLimit} onChange={handlePreferencesChange} />
        </div>
        <div>
          <label>Difficulty Level:</label>
          <select name="difficultyLevel" value={preferences.difficultyLevel} onChange={handlePreferencesChange}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select name="category" value={preferences.category} onChange={handlePreferencesChange}>
            <option value="">Select category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </div>

        <h2>Customize Your Plan Size</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Number of People:</label>
            <input type="number" name="numberOfPeople" value={planSize.numberOfPeople} onChange={handlePlanSizeChange} />
          </div>
          <div>
            <label>Meals Per Week:</label>
            <input type="number" name="mealsPerWeek" value={planSize.mealsPerWeek} onChange={handlePlanSizeChange} />
          </div>
        </form>
        <div>
          <h3>Plan Summary</h3>
          <p>Total: {total}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PlanConfiguration;



