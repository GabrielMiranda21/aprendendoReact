import { Hand, Trash } from "phosphor-react";
import style from './Comment.module.css';

export function Comment(props){
    return (
        <>
            <div className={style.commentContainer}>
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>


                <div className={style.userComment}>
                    <div className={style.content}>
                        <header>
                            <div className={style.infoUser}>
                                <strong class>{props.author}</strong>
                                <time dateTime="03 de setembro">Cerca de 2h</time>
                            </div>
                            <button title='Deletar'><Trash size={24}/></button>
                        </header>
                        
                        <p>Muito bom Devon, parabéns!! 👏👏</p>
                    </div>
                    <div className={style.like}>
                        <button><Hand/> Aplaudir<span>3</span></button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}