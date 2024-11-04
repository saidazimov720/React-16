import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

interface VerificationPage{
    location: {
        state:{
            formData: {
                firstName: string;
                lastName: string;
                email: string;
                passportNumber: string;
            }
        }
    }
}