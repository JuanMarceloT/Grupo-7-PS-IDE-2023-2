import Style from '../styles/home.module.css'
import Style2 from '../styles/borders.module.css'
export default function Home() {
    return (
        <div className={Style.tituloimagem} id='home'>
            <img className = {Style.neko1} src="/img/neko-anotando.png" alt="logo ide"/>
            <div className={Style.titulo}>
                <p>POKE</p>
                <p><spam id="ide-vermelho">IDE</spam>X</p>
                <a href='#form' id='start' className={Style2.pixelCornersDescription} >START</a>
            </div>
        </div>
    )
}