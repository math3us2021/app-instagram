import Cards from './Cards/cardTeste'
import s from './style.module.scss'
import Caro from './carousel/index'

export default function index() {
    return (
        <div className={s.external}>
            <div className={s.carousel}>
                <Caro />
            </div>
            <div className={s.card}>
                <Cards />
            </div>
        </div>
    )
}
