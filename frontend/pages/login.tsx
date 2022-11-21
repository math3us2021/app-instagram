import React from "react"
import axios from "axios"
import { useSnackbar} from 'notistack'
import s from '../styles/Login.module.scss'
import { useRouter } from 'next/router'

  
export default function index() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const  { enqueueSnackbar } = useSnackbar()
  const router = useRouter()

  async function login() {
    console.log(email)
    console.log(password)
    if(email === '' || password === '') {
      enqueueSnackbar( 'Preencha todos os campos Email/Senha',
       { 
        anchorOrigin:{
          vertical: 'top',
          horizontal: 'center',
        },
        variant: 'error' })
    } else {


    axios.post("http://localhost:3333/login",{
      email,
      password
  }).then((response) => {
    if(response.data.token === undefined){
      enqueueSnackbar( 'Email ou senha incorretos',
       { 
        anchorOrigin:{
          vertical: 'top',
          horizontal: 'center',
        },
        variant: 'error' })
    }else{
    localStorage.setItem('token', response.data.token)
    enqueueSnackbar( 'Login efetuado com sucesso', { 
      anchorOrigin:{
        vertical: 'bottom',
        horizontal: 'center',
      },
      variant: 'success' })
    router.push('/')

    }
  }).catch((error) => {
    console.log({message: "Erro ao fazer login:  " + error})
    alert('Erro ao fazer login')
  })
} 
  }

  return (
    <div>
      <div className={s.container}>
        <div>
          <span>Email</span>
          <input 
            className="input"  
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
          <span>Senha</span>
          <input
            type="text"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={()=> login()} >Entrar</button>
      </div>
    </div>
  )
}
