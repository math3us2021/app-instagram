import React from 'react'
import s from './style.module.scss'
import Menu from '../components/Menu'
import Main from '../components/Main'
import BoxRight from '../components/BoxRight'


export default function Home() {
  return (
    <div className={s.external}>
      <div>
        <Menu />
      </div>
      <div className={s.main}>
        <Main />
      </div>
      <div className={s.boxRight}>
        <BoxRight />
        </div>
    </div>
  )
}
