import React from 'react'
import {Snackbar, Alert} from '@mui/material'

const SnackbarComponent = ({
    open,
    severity,
    message
}) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} >
            <Alert severity={severity} sx={{ width: '100%' }}>
                {}
            </Alert>
        </Snackbar>
        )
}

export default SnackbarComponent