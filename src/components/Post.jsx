import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';

export function Post(){
    return (
        <>
            <article className={style.post}>

                <div className={style.autorPost}>

                    <div className={style.cabecario}>
                        <Avatar src="https://github.com/GabrielMiranda21.png"/>

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

                    <textarea placeholder='Deixe um comentário...'/>

                    <button>Publicar</button>
                </form>
            </article>  

            <article className={style.post}>

                <div className={style.autorPost}>

                    <div className={style.cabecario}>
                        <Avatar src="https://github.com/GabrielMiranda21.png"/>

                        <div className={style.autorInfo}>
                            <strong>Devon Lane</strong>
                            <span>Dev Front-End</span>
                        </div>
                    </div>

                    <time className={style.time} datetime="5 de maio de 2025">Publicado a 2 hora</time>
                </div>

                <div className={style.conteudo}>
                    <p>Fala pessoal 👋</p>

                    <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>

                    <p>Acesse e deixe seu feedback </p><a className={style.superTexto} href='#'> 👉 devonlane.design</a>

                    <div className={style.containerSuper}>
                        <a className={style.superTexto} href='#'>#uiux</a>
                        <a className={style.superTexto} href='#'>#userexperience</a>
                    </div>
                </div>

                <form className={style.formComment}>
                    <strong>Deixe seu feedback</strong>

                    <textarea placeholder='Deixe um comentário...'/>
                </form>

                <Comment author='Rodrigo Falcão'/>
                <Comment author='Adriano Douglas'/>
                <Comment author='Felipe Coelho'/>
            </article>  
        </>
    )
}