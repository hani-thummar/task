import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const BasicForm = () => {
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const validateForm = () => {
    let tempErrors = { ...errors };
    let isValid = true;

    // Username validation
    if (!formValues.username) {
      tempErrors.username = 'Username is required';
      isValid = false;
    } else {
      tempErrors.username = '';
    }

    // Password validation
    if (!formValues.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (formValues.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    } else {
      tempErrors.password = '';
    }

    setErrors(tempErrors);
    setIsSubmitDisabled(!isValid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = () => {
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (!isSubmitDisabled) {
      alert('Form submitted successfully');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}
    >
      <TextField
        label="Username"
        name="username"
        value={formValues.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.username)}
        helperText={errors.username}
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.password)}
        helperText={errors.password}
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitDisabled}
        sx={{ marginTop: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default BasicForm;
