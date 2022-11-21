import React from 'react'
import s from './style.module.scss'
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


type Props = {
  photo: string;
  name: string;
  subName: string;
}

export default function index(props: Props) {
  return (

    <div className={s.box}>
      <CardHeader
        avatar={
          <div className={s.image}>
            <img className={s.foto} src={props.photo} alt="" />
          </div>
        }
        action={
          <div className={s.seguir}>
              <IconButton aria-label="settings">
            <p>Seguir</p>
          </IconButton>
          </div>
        }
        title={props.name}
        subheader={props.subName}
      />
    </div>

  )
}
// <div>:
{/* {fotoNome.map((item, index) => (
      <div className={s.box} key={index}> */}
    //   ))}
    // </div>