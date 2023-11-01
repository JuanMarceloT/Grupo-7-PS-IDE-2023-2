import Style from "@/styles/iniciais.module.css"

import Link from 'next/link';

export default function Iniciais(){
    return (
        <div className={Style.container}>
            <div className={Style.mainText}>
                <h1>CONHECENDO OS STARTERS</h1>
            </div>
            <div className={Style.mainContent}>
                <div className={Style.nekoContainer}>
                    <h1>
                        ESCOLHA UM!
                    </h1>
                    <img src="./img/neko-dormindo.png" alt="" />
                </div>
                <div className={Style.textContainer}>
                    <h1>
                        Treinadores Pokémon enfrentam uma decisão 
                        crucial ao escolher seu Pokémon inicial, pois 
                        isso moldará suas aventuras. Os tipos - Água, 
                        Fogo e Planta - influenciam as batalhas e 
                        estratégias. Água domina Fogo, Fogo vence
                        Planta, e Planta supera Água. Escolher com 
                        sabedoria é a chave para o sucesso nas 
                        jornadas Pokémon. Conheça um pouco
                        mais sobre esses tipos!
                    </h1>
                </div>
            </div>
            <div className={Style.bottomContent}>
                <div className={Style.buttonsContainer}>
                    <button><h1>agua</h1>
                        <img src="./img/Tipos/Agua_longo.png"></img>
                    </button>
                    <button><h1>fogo</h1>
                        <img src="./img/Tipos/Fogo_longo.png"></img>
                    </button>
                    <button><h1>planta</h1>
                        <img src="./img/Tipos/planta_longo.png"></img>
                    </button>
                </div>
                <div className={Style.IDEButtonContainer}>
                    <a href="https://www.idejr.com.br/">
                        <img src="./img/logo-pixelado-roxo.png" alt="IDE" />
                    </a>
                </div>
            </div>
        </div>
    )
}
