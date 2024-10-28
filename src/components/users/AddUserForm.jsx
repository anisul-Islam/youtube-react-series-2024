import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { uploadImageToCloduinary } from '../../utility/uploadImageToCloudinary';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(0);
  const [image, setImage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    try {
      if (file) {
        const imageUrl = await uploadImageToCloduinary(file);
        setImage(imageUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: nanoid(),
      name: name,
      email: email,
      age: age,
      country: country,
      gender: gender,
      image: image,
    };
    console.log(newUser);
  };
  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={handleNameChange} />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" onChange={handleEmailChange} />
        </div>

        <div>
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" onChange={handleAgeChange} />
        </div>

        <div>
          <label htmlFor="country">Country: </label>
          <input type="text" id="country" onChange={handleCountryChange} />
        </div>

        <div>
          <label htmlFor="gender">Gender: </label>
          <select id="gender" onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="not-applicable">Not Applicable</option>
          </select>
        </div>

        <div>
          <label htmlFor="image">User Image: </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && (
            <div>
              <img src={image} alt={name} />
            </div>
          )}
        </div>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
