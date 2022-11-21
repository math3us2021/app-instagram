import React from 'react'
import s from './style.module.scss'
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField, Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      
      <div className={s.menuHorizontal}>
        <div>
          <button>instagram</button>
        </div>

        <div className={s.input}>
          <TextField id="outlined-basic" label="Pesquisar" variant="outlined" sx={{width: "300px"}}></TextField>
        </div>
        <div>
          < FavoriteBorderIcon />
        </div>
      </div>

      <div className={s.box}>
        <div className={s.title}>
          <Typography variant="h4" component="div" gutterBottom sx={{margin: "15px"}}>Instagram</Typography>
        </div>
        <div className={s.buttonMenu}>
          <HomeIcon sx={{fontSize: 30}} />
          <p>Página Inicial</p>
        </div>
        <div className={s.buttonMenu}>
          <SearchIcon sx={{fontSize: 30}} />
          <p>Pesquisa</p>
        </div>
        <div className={s.buttonMenu}>
          <ExploreIcon sx={{fontSize: 30}} />
          <p>Explorar</p>
        </div>
        <div className={s.buttonMenu}>
          <ChatBubbleOutlineIcon sx={{fontSize: 30}} />
          <p>Mensagem</p>
        </div>
        <div className={s.buttonMenu}>
          <FavoriteBorderIcon sx={{fontSize: 30}} />
          <p>Notificações</p>
        </div>
        <div className={s.buttonMenu}>
          <AddCircleOutlineIcon sx={{fontSize: 30}} />
          <p>Adicionar</p>
        </div>
        <div className={s.buttonMenu}>
          <AccountCircleIcon sx={{fontSize: 30}} />
          <p>Perfil</p>
        </div>

      </div>

    </div>
  )
}
