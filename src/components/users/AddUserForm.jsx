import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { uploadImageToCloduinary } from '../../utility/uploadImageToCloudinary';
import styles from './AddUserForm.module.css';

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
    setCountry(event.target.value);
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
        event.target.value = '';
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

    // reset the states
    setName('');
    setEmail('');
    setCountry('');
    setAge(0);
    setGender('male');
    setImage('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Add User</h2>
        <div className={styles['form-group']}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={handleCountryChange}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="gender">Gender: </label>
          <select id="gender" value={gender} onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="not-applicable">Not Applicable</option>
          </select>
        </div>

        <div className={styles['form-group']}>
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
