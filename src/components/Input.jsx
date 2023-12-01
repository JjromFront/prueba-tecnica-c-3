import React from 'react'
import { TextField } from '@mui/material'

const Input = ({
    placeholder,
    change,
    name,
    type
}) => {
    const handleChange = (event) => {
        const { value } = event.target;
        change({ name, value });
    };
    return (
        <TextField variant="filled" label={placeholder} placeholder={placeholder} onChange={handleChange} name={name} type={type} sx={{
            width: "350px",
            margin: "7px"
        }}/>
    )
}

export default Input