import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Stack, TextField, Typography, useTheme } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import SnackbarComponent from '../../components/Snackbar';

// Inicializamos valores del formulario
const initValues = { account_recieve: "", amount: 0 };

export const Transferencia = () => {
  // Inicializamos estados y variables importantes
  const token = localStorage.getItem("token")
  const data = JSON.parse(localStorage.getItem("userJson"))
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState('')
  const [form, setForm] = useState(initValues)
  const theme = useTheme()
  const colors = theme.palette
  const navigate = useNavigate()

  // MManejando el onchange, actualizamos la informacion del formulario
  const handleChange = ({ target }) => {
    const { name, value } = target
    setForm((prop) => ({
      ...prop, [name]: value
    }))
  }

  // Manejamos el submit
  const handleSubmit = async () => {
    setLoading(true)
    try {
      // Hacemos request al servidor
      const response = await axios.post('https://bank.jedidiazfagundez.site/api/movements', { 
        account_recive: form.account_recieve, 
        amount: Number(form.amount), 
        token: token, 
        id: data.id 
      })

      // Actualizamos el local storage y navegamos hacia la ruta /home
      data["money"] = response.data.new_money
      localStorage.setItem("userJson", JSON.stringify(data))
      navigate('/home')

      // Actualizamos estados
      setLoading(false)
      setMessage(response.data.msg)
      setSeverity("success")
    } catch (error) {
      // Obtenemos el error y actualizamos estados
      setSeverity("error")
      setMessage(error.response.data.msg)
      setLoading(false)
    }
  }
  return (
    <>
      <Navbar isLogin={false} />
      <Stack maxWidth={"100%"} justifyContent={'center'} alignItems={"center"} >
        <Stack minWidth={"400px"} justifyContent={'center'} spacing={2} marginTop={"80px"}>
          <Typography fontSize="30px" fontWeight="600" color={colors.primary.main} textAlign="center">Transfiere Ya</Typography>
          <TextField label="Destinatario" name='account_recieve' onChange={handleChange} />
          <TextField label="Valor" name='amount' type='number' onChange={handleChange} />
          <LoadingButton variant='contained' onClick={handleSubmit} loading={loading}>Transferir</LoadingButton>
                <SnackbarComponent message={message} severity={severity} open={Boolean(message)}></SnackbarComponent>
        </Stack>
      </Stack>
    </>
  )
}
