import style from './Header.module.css';
import ignite from '../assets/ignite.svg';

export function Header(){
    return (
        <header className={style.header}>
            <img src={ignite} alt="logo_ignite" />
            <strong>Ignite</strong>
        </header>
    )
}