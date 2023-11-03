import Style from '../styles/header.module.css'
export default function Header(){
    return(
        <div className ={Style.header}>
                <a href="#home">HOME</a>
                <a href="#inicias">INICIAIS</a>
                <a href="#about">SOBRE</a>
                <a href="#form">FORMULARIO</a>
            </div>
    )
}