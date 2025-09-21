import style from "./Avatar.module.css"

const hasBorder = style.hasBorder

export function Avatar( {border = hasBorder, src} ) {
    return ( 
        <>
            <img className={border ? style.avatar : style.hasBorder} src={src}></img>
        </>
    )
}