import { Stack, useTheme, Typography, Button } from '@mui/material'
import { Navbar } from '../../components/Navbar'
import Input from '../../components/Input'
import { useState } from 'react'
import axios from 'axios'
import SnackbarComponent from '../../components/Snackbar'

const initForm = { account: "", password: "" }
export const Login = () => {
  const [form, setForm] = useState(initForm)
  const [message, setMessage] = useState("")
  const theme = useTheme()
  const colors = theme.palette

  const handleChange = (target) => {
    const { value, name } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://bank.jedidiazfagundez.site/api/login", form)
      setMessage(response.data.msg)
    } catch (error){
      setMessage(error.response.data.msg)
    }
  }

  console.log(form)

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="calc(100vh - 100px)"
    >
      <Stack
        width="425px"
        height="450px"
        bgcolor={colors.secondary.main}
        borderRadius="10px"
        justifyContent="center"
        alignItems="center">

        <Typography
          variant='h3'
          fontWeight={600}
          textAlign="center"
          color={colors.primary.main}
        >
          Davidplata
        </Typography>
        <Typography
          variant='p'
          fontWeight={300}
          textAlign="center"
          margin="10px"
        >
          Puedes iniciar sesion metiendo tus credenciales en el formulario de abajo
        </Typography>

        <Input
          placeholder="Account"
          name="account"
          change={handleChange}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          change={handleChange}
        />

        <Button variant="contained" onClick={handleSubmit} sx={{
          mt: "30px",
          width: "350px",
        }}>Enviar</Button>

        <SnackbarComponent 
          message={message}
        ></SnackbarComponent>
      </Stack>
    </Stack>
  )
}
