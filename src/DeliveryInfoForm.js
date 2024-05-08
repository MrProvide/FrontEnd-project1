import React, { useState } from 'react';

const DeliveryInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    apartmentSuiteFloor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Čia galite vykdyti kodą, kuris siunčia pristatymo informaciją į serverį arba atlieka kitus veiksmus
    console.log('Delivery info:', formData);
  };

  return (
    <div>
      <h2>Delivery Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Street Address:</label>
          <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div>
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div>
          <label>Zip Code:</label>
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Apt/Suite/Floor:</label>
          <input type="text" name="apartmentSuiteFloor" value={formData.apartmentSuiteFloor} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DeliveryInfoForm;
