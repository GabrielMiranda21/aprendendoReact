import { PencilLine } from "phosphor-react";
import style from './Sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={style.aside}>
            <img 
                className={style.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={style.profile}>
                <img className={style.avatar} src="https://avatars.githubusercontent.com/u/84639849?v=4"/>
                <strong>Gabriel Miranda</strong>
                <span>Desenvolvedor Front-End</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>   
        </aside>
    )
}