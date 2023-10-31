import Style from '../styles/home.module.css'
export default function Home() {
    return (
        <div className={Style.tituloimagem}>
            <img className = {Style.neko1} src="/img/neko-anotando.png" alt="logo ide"/>
            <div className={Style.titulo}>
                <p>POKE</p>
                <p><spam id="ide-vermelho">IDE</spam>X</p>
                <button class= "border">Start</button>
            </div>
        </div>
    )
}