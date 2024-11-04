import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  passportNumber: string;
  gender: string;
  dob: string;
  birthCity: string;
  birthCountry: string;
  mailingAddress: string;
  phoneNumber: string;
}

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    passportNumber: '',
    gender: '',
    dob: '',
    birthCity: '',
    birthCountry: '',
    mailingAddress: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (checked ? 'Male' : 'Female') : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/verify', { state: { formData } });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Visa Application Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Passport Number"
            name="passportNumber"
            value={formData.passportNumber}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox name="gender" checked={formData.gender === 'Male'} onChange={handleChange} />}
            label="Male"
          />
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Birth City"
            name="birthCity"
            value={formData.birthCity}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Birth Country"
            name="birthCountry"
            value={formData.birthCountry}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Mailing Address"
            name="mailingAddress"
            value={formData.mailingAddress}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <Box mt={3}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default FormPage;
