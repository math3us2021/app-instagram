import Cards from './Cards'
import s from './style.module.scss'
import Caroseul from './Carousel/index'
import { fotoNome } from '../BoxRight'
import React from 'react'

type Props = {
    handleOpen: any
}

export default function index(props: any) {

    const handleOpen = (childdata: any) => {
        props.handleOpen(childdata)
    }


    return (
        <div className={s.external}>
            <div className={s.carousel}>
                <Caroseul handleOpen={handleOpen} />
            </div>
            <div className={s.card}>
                {fotoNome.map((item, index) => (
                    <div key={index}>
                        <Cards photo={item.photo} name={item.name} subName={item.subName} />
                    </div>
                ))}
            </div>
        </div>
    )
}
