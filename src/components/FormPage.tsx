import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import path from "path";

interface FormData{
    firstName: string,
    lastName: string,
    email:string,
    passportNumber: string
}

const FormPage = () => {
    const[formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        passportNumber: '',
    });

    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        navigate.caller({
            pathname: '/verify',
            state: {formData}
        });
    };
