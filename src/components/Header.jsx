import style from './Header.module.css';

export function Header(){
    return (
        <header className={style.header}>
            <img src="#" alt="logo_ignite" />
            <strong>Ignite</strong>
        </header>
    )
}