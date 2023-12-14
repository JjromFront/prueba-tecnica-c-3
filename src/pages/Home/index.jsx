import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Stack, Typography, useTheme } from '@mui/material'

export const Home = () => {
    const data = JSON.parse(localStorage.getItem("userJson"))
    const theme = useTheme()
    const colors = theme.palette
    return (
        <>
            <Navbar isLogin={false} />
            <Stack width="100%" justifyContent="center" alignItems="center" marginTop="100px">
                <Stack width="75%" flexDirection="row" justifyContent="space-between">
                    <Typography  fontSize="30px" fontWeight="600" >
                        Hola, {data.name}
                    </Typography>
                    <Typography paddingY="10px" paddingX="50px" fontSize="30px" fontWeight="600" color={colors.secondary.main} borderRadius="10px" sx={{
                        backgroundColor: colors.primary.main,
                    }}>
                        N.O {data.account}
                    </Typography>
                </Stack>
                <Stack marginTop="175px">
                    <Typography fontSize="18px" fontWeight="600">
                        Dinero disponible:
                    </Typography>
                    <Typography paddingY="10px" paddingX="50px" fontSize="30px" letterSpacing="2px" fontWeight="600" color={colors.secondary.main} borderRadius="10px" marginTop="5px" sx={{
                        backgroundColor: colors.primary.main,
                    }}>
                        ${data.money}
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}
