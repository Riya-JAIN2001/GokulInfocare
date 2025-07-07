import React, { useState ,useEffect} from "react";
import "./CreateForm.css"; // Create a corresponding CSS file for styling

const CreateForm = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.phoneNumber.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;}
    onCreate(formData);
   
    onClose();
  };



  const handleCountrycodechange = (e) => {
    const valueSelected = e.target.value;
    setCountryChange(valueSelected);
    const countryData = countries.find(
      (country) => country.name === valueSelected
    );

    if (countryData) {
      setCountryCode(countryData.code);
      // Update the formData with the selected country code
      setFormData({ ...formData, code: countryData.code });
    } else {
      setCountryCode("");
    }
  };
  return (
    <div className="create-form-container">
      <div className="create-form">
        <h2>Create Contact</h2>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
         
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <div className="button-container">
          <button className="create-button" onClick={handleSubmit}>
            Create
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
