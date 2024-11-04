import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import FormButton from '../form/FormButton';
import FormGroup from '../form/FormGroup';
import ImagePreview from '../form/ImagePreview';
import FormSelectGroup from '../form/FormSelectGroup';
import LoadingSpinner from '../LoadingSpinner';
import { uploadImageToCloduinary } from '../../utility/uploadImageToCloudinary';
import { signUpfields } from './userFileds';

const SignUpForm = ({ setUsers }) => {
  const initialValue = {
    name: '',
    email: '',
    country: '',
    gender: 'Select gender',
    age: '',
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
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setUser((prevState) => ({
        ...prevState,
        [name]: name === 'age' ? Number(value) : value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!user.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (user.name.trim().length < 2) {
      newErrors.name = 'Name should be at least 2 characters long';
    }
    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (typeof user.age !== 'number' || user.age <= 0)
      newErrors.age = 'Age must be a positive integer';
    if (user.country.trim().length < 2) {
      newErrors.country = 'Country name should be at least 2 characters long';
    }
    if (!user.gender) {
      newErrors.gender = 'Please select a gender';
    }
    if (user.gender === 'Select gender') {
      newErrors.gender = 'Please select a gender';
    }
    if (!user.image.trim()) {
      newErrors.image = 'Image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      setUsers((prevUsers) => [...prevUsers, newUser]);
      toast.success('User is created successfully');
      // reset the states
      setUser(initialValue);
      setFileInputKey(Date.now());
    } else {
      toast.error('Form validation failed');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2>Sign Up</h2>
        {signUpfields.map((field) => {
          return field.type === 'select' ? (
            <FormSelectGroup
              key={field.id}
              id={field.id}
              label={field.label}
              name={field.name}
              value={user[field.name]}
              onChange={handleChange}
              required={field.required}
              error={errors[field.name]}
              options={field.options}
              placeholder={field.placeholder}
            />
          ) : (
            <FormGroup
              key={field.name === 'image' ? fileInputKey : field.id} // only reset file input when `image`
              id={field.id}
              label={field.label}
              type={field.type}
              name={field.name}
              value={user[field.name]}
              onChange={handleChange}
              required={field.required}
              error={errors[field.name]}
              accept={field.accept}
            />
          );
        })}

        <div className="form-preview-container">
          <ImagePreview src={user.image} alt="Uploaded user image" />
          {isLoading && <LoadingSpinner />}
          {/* {isLoading && <ClipLoader size={40} color='#09f'/>} */}
        </div>

        <FormButton type="submit" disabled={isLoading}>
          Sign Up
        </FormButton>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  setUsers: PropTypes.func,
};

export default SignUpForm;
