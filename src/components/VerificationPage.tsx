import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface VerificationPageProps {
    state: {
        formData: {
            firstName: string;
            lastName: string;
            email: string;
            passportNumber: string;
        };
    };
}

const VerificationPage: React.FC = () => {
    const location = useLocation();
    const { formData } = location.state as VerificationPageProps["state"];

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Verify Your Information
                </Typography>
                <Typography variant="body1">
                    <strong>First Name:</strong> {formData.firstName}
                </Typography>
                <Typography variant="body1">
                    <strong>Last Name:</strong> {formData.lastName}
                </Typography>
                <Typography variant="body1">
                    <strong>Email:</strong> {formData.email}
                </Typography>
                <Typography variant="body1">
                    <strong>Passport Number:</strong> {formData.passportNumber}
                </Typography>
                <Box mt={3}>
                    <Button variant="contained" color="primary" onClick={() => alert('Verified!')}>
                        Confirm
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default VerificationPage;