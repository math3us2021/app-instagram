import React from 'react'
import s from './style.module.scss'
import Menu from '../components/Menu'
import Main from '../components/Main'
import BoxRight from '../components/BoxRight'
import Modal from '../components/Modal'
import axios from 'axios'

type Props = {
  handleOpen: any
}

export default function Home(props: Props) {
  const [isVisivel, setIsVisivel] = React.useState(false)

  const handleOpen = (childdata: any) => {
    // console.log('Função Pai Home' + childdata)
    setIsVisivel(childdata)
    // console.log('Função Pai Home' + isVisivel)
  }
  console.log('Função Pai Home'+ isVisivel)


  
  return (
    <div className={s.external}>
      <div>
        <Menu />
      </div>
      <div className={s.main}>
      
        <Main handleOpen={handleOpen} />
      </div>

      <div className={s.boxRight}>
        <BoxRight />
      </div>
        {isVisivel && <Modal handleClose={()=> setIsVisivel(false)} />}
      </div>
      )
}
