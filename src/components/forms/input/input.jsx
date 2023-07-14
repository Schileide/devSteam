import style from './input.module.css'

export default function Input({fullWidth, ...props}) {
    return(
        <input className={`${style.input} ${fullWidth && style.fullwidth}`} {...props}/>
    )
}