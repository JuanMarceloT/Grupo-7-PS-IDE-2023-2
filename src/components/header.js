import Style from '../styles/header.module.css'
export default function Header(){
    return(
        <div className ={Style.header}>
                <a href="#home">HOME</a>
                <p>INICIAIS</p>
                <p>SOBRE</p>
                <a href="#form">FORMULARIO</a>
            </div>
    )
}