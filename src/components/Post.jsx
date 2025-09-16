import style from './Post.module.css';

export function Post(){
    return (
        <article className={style.post}>

            <div className={style.autorPost}>

                <div className={style.cabecario}>
                    <img 
                        className={style.avatar}
                        src="https://avatars.githubusercontent.com/u/84639849?v=4"
                    />

                    <div className={style.autorInfo}>
                        <strong>Gabriel Miranda</strong>
                        <span>Desenvolvedor Front-End</span>
                    </div>
                </div>

                <time className={style.time} datetime="5 de maio de 2025">Publicado a 1 hora</time>
            </div>

            <div className={style.conteudo}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <a className={style.superTexto} href='#'>👉 jane.design/doctorcare</a>

                <div className={style.containerSuper}>
                    <a className={style.superTexto} href='#'>#novoprojeto</a>
                    <a className={style.superTexto} href='#'>#nlw</a>
                    <a className={style.superTexto} href='#'>#rocketseat</a>
                </div>
            </div>

            <form className={style.formComment}>
                <strong>Deixe seu feedback</strong>

                <textarea />

                <button>Publicar</button>
            </form>
        </article>  
    )
}