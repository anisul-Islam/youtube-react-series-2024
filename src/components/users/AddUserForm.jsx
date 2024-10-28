import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { uploadImageToCloduinary } from '../../utility/uploadImageToCloudinary';
import styles from './AddUserForm.module.css';

const AddUserForm = () => {
  const initialValue = {
    name: '',
    email: '',
    country: '',
    gender: 'male',
    age: 0,
    image: '',
  };

  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleChange = async (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      const file = files[0];
      if (file) {
        try {
          const imageUrl = await uploadImageToCloduinary(file);
          setUser((prevState) => ({
            ...prevState,
            [name]: imageUrl,
          }));
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErros = {};
    if (!user.name.trim()) {
      newErros.name = 'User name is required';
    }
    if (user.name.trim().length < 2) {
      newErros.name = 'User name should be at least 2 characters long';
    }
    if (!user.email.trim()) {
      newErros.email = 'User email is required';
    }
    if (!user.age || user.age <= 0) {
      newErros.age = 'User age must be a positive integer';
    }
    if (user.country.trim().length < 2) {
      newErros.country = 'User country name should be at least 2 characters long';
    }
    if (!user.gender.trim()) {
      newErros.gender = 'User gender is required';
    }
    if (!user.image.trim()) {
      newErros.image = 'User image is required';
    }

    setErrors(newErros);
    return Object.keys(newErros).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const newUser = {
        id: nanoid(),
        name: user.name,
        email: user.email,
        age: user.age,
        country: user.country,
        gender: user.gender,
        image: user.image,
      };
      console.log(newUser);
      // reset the states
      setUser(initialValue);
      setFileInputKey(Date.now());
    } else {
      console.log('your form is not valid');
    }
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
            value={user.name}
            name="name"
            onChange={handleChange}
            required
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={user.email}
            name="email"
            onChange={handleChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            value={user.age}
            name="age"
            onChange={handleChange}
            required
          />
          {errors.age && <p>{errors.age}</p>}
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            id="country"
            value={user.country}
            name="country"
            onChange={handleChange}
            required
          />
          {errors.country && <p>{errors.country}</p>}
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="gender">Gender: </label>
          <select
            id="gender"
            value={user.gender}
            name="gender"
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="not-applicable">Not Applicable</option>
          </select>
          {errors.gender && <p>{errors.gender}</p>}
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="image">User Image: </label>
          <input
            name="image"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleChange}
            key={fileInputKey}
            required
          />
          {user.image && (
            <div>
              <img src={user.image} alt={user.name} />
            </div>
          )}
          {errors.image && <p>{errors.image}</p>}
        </div>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
