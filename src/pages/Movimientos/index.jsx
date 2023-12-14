import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../../components/Navbar';
import { Stack, Typography, Paper, Grid } from '@mui/material';

const Movimientos = () => {
    const [movements, setMovements] = useState([]);
    const data = JSON.parse(localStorage.getItem("userJson"));

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://bank.jedidiazfagundez.site/api/movements/${data.id}`);
                setMovements(response.data.reverse());
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [data.id]);

    return (
        <>
            <Navbar isLogin={false} />
            <Stack spacing={2} sx={{ p: 2 }}>
                {movements.map((movement, index) => (
                    <Paper key={index} elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Transaction ID: {movement.id_transaction}
                        </Typography>
                        <Typography>
                            Amount: {movement.amount}
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Typography>
                                    Sender: {movement.name_user_send} ({movement.account_usuario_send})
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>
                                    Receiver: {movement.name_user_recive} ({movement.account_usuario_recive})
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </Stack>
        </>
    );
};

export default Movimientos;
