import React, { useEffect, useState } from 'react'
import { Snackbar, Alert } from '@mui/material'

const SnackbarComponent = ({
    open,
    severity,
    message,
}) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <Alert severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarComponent;
