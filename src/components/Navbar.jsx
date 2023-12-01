//cuenta 013
import React from 'react'
import { Stack, Typography, Button, useTheme } from '@mui/material'
import theme from '../theme'

export const Navbar = ({
    isLogged
}) => {
    const theme = useTheme()
    const colors = theme.palette
    return (
        <Stack
            minWidth="100vw"
            minHeight="70px"
            p="15px"
            bgcolor={colors.secondary.main}
            justifyContent="space-between"
            direction="row"
            alignItems="center" 
        >
            <Stack textAlign="center">
                <Typography color={colors.primary.main} variant='h4' fontWeight="600">Davidplata</Typography>
            </Stack>

            <Stack marginRight="30px">
                <Button 
                variant="contained" 
                sx={{
                    backgroundColor: colors.primary.main, 
                    color: colors.secondary.main,
                    fontWeight: "600",
                    }}
                >Transferir</Button>
            </Stack>
        </Stack>
    )
}

