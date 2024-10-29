import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

import { uploadImageToCloduinary } from '../../utility/uploadImageToCloudinary';
import FormButton from '../form/FormButton';
import FormGroup from '../form/FormGroup';
import ImagePreview from '../form/ImagePreview';
import FormSelectGroup from '../form/FormSelectGroup';
import LoadingSpinner from '../LoadingSpinner';

const SignUpForm = () => {
  const initialValue = {
    name: '',
    email: '',
    country: '',
    gender: 'Select gender',
    age: 0,
    image: '',
  };

  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file' && files[0]) {
      try {
        setIsLoading(true);
        const imageUrl = await uploadImageToCloduinary(files[0]);
        setUser((prevState) => ({
          ...prevState,
          [name]: imageUrl,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
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
      newErros.name = 'Name is required';
    }
    if (user.name.trim().length < 2) {
      newErros.name = 'Name should be at least 2 characters long';
    }
    if (!user.email.trim()) {
      newErros.email = 'Email is required';
    }
    if (!user.age || user.age <= 0) {
      newErros.age = 'Age must be a positive integer';
    }
    if (user.country.trim().length < 2) {
      newErros.country = 'Country name should be at least 2 characters long';
    }
    if (!user.gender) {
      newErros.gender = 'Please select a gender';
    }
    if (!user.image.trim()) {
      newErros.image = 'Image is required';
    }

    setErrors(newErros);
    return Object.keys(newErros).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const newUser = {
        id: nanoid(),
        ...user,
        // name: user.name,
        // email: user.email,
        // age: user.age,
        // country: user.country,
        // gender: user.gender,
        // image: user.image,
      };
      console.log(newUser);
      // reset the states
      setUser(initialValue);
      setFileInputKey(Date.now());
    } else {
      console.warn('Form validation failed');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2>Sign Up</h2>
        {/* id, label, name, type, value, onChange, required, accept, error, */}
        <FormGroup
          id="name"
          label="Name"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required={true}
          error={errors.name}
        />

        <FormGroup
          id="email"
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required={true}
          error={errors.email}
        />

        <FormGroup
          id="age"
          label="Age"
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          required={true}
          error={errors.age}
        />

        <FormGroup
          id="country"
          label="Country"
          type="text"
          name="country"
          value={user.country}
          onChange={handleChange}
          required={true}
          error={errors.country}
        />

        <FormSelectGroup
          id="gender"
          label="Gender"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          required={true}
          error={errors.gender}
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Not Applicable', value: 'not-applicable' },
          ]}
          placeholder="Select gender"
        />

        <FormGroup
          id="image"
          label="Image"
          type="file"
          name="image"
          value={user.image}
          onChange={handleChange}
          required={true}
          accept="image/*"
          key={fileInputKey}
          error={errors.image}
        />

        <div className="form-preview-container">
          <ImagePreview src={user.image} alt="Uploaded user image" />
          {isLoading && <LoadingSpinner />}
        </div>

        <FormButton type="submit" disabled={isLoading}>
          Sign Up
        </FormButton>
      </form>
    </div>
  );
};

export default SignUpForm;
