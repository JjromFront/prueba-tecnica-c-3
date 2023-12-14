//cuenta 013
import React from 'react'
import { Stack, Typography, Button, useTheme } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import theme from '../theme'

export const Navbar = ({
    isLogin
}) => {
    const theme = useTheme()
    const colors = theme.palette
    const navigate = useNavigate()

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
            <Stack textAlign="center" sx={{
                "&:hover": {
                    cursor: "pointer"
                }
            }} onClick={navigate("/home")}>
                <Typography color={colors.primary.main} variant='h4' fontWeight="600">Davidplata</Typography>
            </Stack>

            <Stack marginRight="30px">
                {isLogin ? <Button
                    variant="contained"
                    sx={{
                        backgroundColor: colors.primary.main,
                        color: colors.secondary.main,
                        fontWeight: "600",
                    }}
                    onClick={() => navigate("/login")}
                >Login</Button> : <Stack direction="row" gap="10px"> <Button
                variant="contained"
                sx={{
                    backgroundColor: colors.primary.main,
                    color: colors.secondary.main,
                    fontWeight: "600",
                }}
                onClick={() => navigate('/movimientos')}
            >Movimientos</Button> <Button
            variant="contained"
            sx={{
                backgroundColor: colors.primary.main,
                color: colors.secondary.main,
                fontWeight: "600",
            }}
            onClick={() => navigate('/transferencia')}
        >Transferir</Button></Stack>}
            </Stack>
        </Stack>
    )
}

