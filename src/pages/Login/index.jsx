import { Stack, useTheme, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'
import axios from 'axios'
import SnackbarComponent from '../../components/Snackbar'
import Input from '../../components/Input'
import { Navbar } from '../../components/Navbar'
import {useNavigate} from 'react-router-dom'

const initForm = { account: '', password: '' }

export const Login = () => {
  const [form, setForm] = useState(initForm)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState('')
  const [loading, setLoading] = useState(false)
  const theme = useTheme()
  const colors = theme.palette
  const navigate = useNavigate()

  const handleChange = (target) => {
    const { value, name } = target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }
  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post('https://bank.jedidiazfagundez.site/api/login', form)
      console.log(response)
      localStorage.setItem("userJson", JSON.stringify(response.data.user))
      localStorage.setItem("token", response.data.token)
      setMessage(response.data.msg)
      setSeverity('success')
      navigate('/home')
    } catch (error) {
      setMessage(error.response.data.msg)
      setSeverity('error')
    } finally {
      setLoading(false)
    }
  }

  return (

    <>
      <Navbar isLogin={true} />

      <Stack justifyContent="center" alignItems="center" minHeight="calc(100vh - 100px)">
        <Stack
          width="425px"
          height="450px"
          bgcolor={colors.secondary.main}
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3" fontWeight={600} textAlign="center" color={colors.primary.main}>
            Davidplata
          </Typography>
          <Typography variant="p" fontWeight={300} textAlign="center" margin="10px">
            Puedes iniciar sesion metiendo tus credenciales en el formulario de abajo
          </Typography>

          <Input placeholder="Account" name="account" change={handleChange} />
          <Input placeholder="Password" name="password" type="password" change={handleChange} />

          <LoadingButton
            variant="contained"
            onClick={handleSubmit}
            loading={loading}
            sx={{
              mt: '30px',
              width: '350px',
            }}
          >
            Enviar
          </LoadingButton>

          <SnackbarComponent message={message} severity={severity} open={message}></SnackbarComponent>
        </Stack>
      </Stack>
    </>
  )
}
