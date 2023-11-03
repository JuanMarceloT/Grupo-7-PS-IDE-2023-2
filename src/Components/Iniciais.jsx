import Style from "../styles/iniciais.module.css"
import pokemons from "@/../content/pokemons.json";
import borders from "@/styles/borders.module.css"
import React, { useState, useEffect } from 'react';
import { getBorderClassByColor, getBorderClassByType } from '../utils/borderUtils';


export default function Iniciais(){

    const [BtnState, setBtnState] = useState(1);
    const [tipo, setTipo] = useState(null);

    useEffect(() => {
      switch (BtnState) {
        case 1:
          setTipo('AGUA');
          break;
        case 2:
            setTipo('PLANTA');
            break;
        case 3:
            setTipo('FOGO');
          break;
        default:
          setTipo(null);
          break;
      }
    }, [BtnState]);
    let title = "";
    if (tipo) {
      title = tipo === pokemons.AGUA ? "ÁGUA" : tipo === pokemons.FOGO ? "FOGO" : "PLANTA";
    }

    return (
        <div className={Style.container}>
            <div className={Style.mainText}>
            {tipo != null ? (<h1 style={{textAlign: 'initial', color: `${pokemons[tipo].mainColor}`}}>{tipo}</h1>) : <h1>CONHECENDO OS STARTERS</h1>}
            </div>
            <div className={`${Style.mainContent} ${tipo == null ? `${borders.pixelCorners} ${borders.purple}` : null}`}>
            {tipo != null ? (
                    <div className={Style.cardscontainer} >
                        <PokemonsCards info={pokemons[tipo]}/>
                    </div>
                )
                 : <div className={Style.nekoContainer} style={{bordersRight : '2px solid #603B88'}}>
                        <h1>
                            <strong>ESCOLHA UM!</strong>
                        </h1>
                        <img src="./img/neko-dormindo.png" alt="" />
                    </div>
                 }
                 {tipo != null ? (
                    <div className={Style.nekoStats} >
                        <SuperEfetivo info={pokemons[tipo]}/>
                        <img src="./img/neko-piscando.png"/>
                        <Fraquezas info={pokemons[tipo]}/>
                    </div>
                )
                 : 
                <div className={Style.textContainer}>
                    <img src="./img/aspas.png"/>
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
                    <img src="./img/aspas.png" style={{float: 'right', transform: 'scaleX(-1)'}}/>
                </div>}
            </div>
            <div className={Style.bottomContent}>
                <div className={Style.buttonsContainer}>
                        <BtnTipos tipo="Agua" id={1} BtnState={BtnState} setBtnState={setBtnState} menu={tipo != null ? 0 : 1} />
                        <BtnTipos tipo="Planta" id={2} BtnState={BtnState} setBtnState={setBtnState} menu={tipo != null ? 0 : 1} />
                        <BtnTipos tipo="Fogo" id={3} BtnState={BtnState} setBtnState={setBtnState} menu={tipo != null ? 0 : 1} />
                </div>
                {tipo != null ? (
                    <div className={`${Style.IDEButtonContainer} ${borders.pixelCornersDescription} ${getBorderClassByType(tipo)}`} style={{width: '80%', margin: '0 auto'}}>
                    <a  style={{margin: '20px 10px'}}>
                        {pokemons[tipo].description}
                    </a>
                </div>
                ) 
                : 
                
                <div className={`${Style.IDEButtonContainer} ${borders.pixelCorners} ${borders.purple}`}>
                    <a href="https://www.idejr.com.br/" >
                        <img src="./img/logo-pixelado-roxo.png" alt="IDE" />
                    </a>
                </div>
                }
            </div>
        </div>
    )
}


function BtnTipos(props) {
    return (
        <button onClick={() => props.BtnState === props.id ? props.setBtnState(null) : props.setBtnState(props.id)} style={{ color: props.menu != 1 ? 'transparent' : '#603B88'}}>
            <h1>{props.tipo}</h1>
            <img src={`./img/Tipos/${props.tipo}_longo.png`} alt={props.tipo} style={{colorAdjust: ``}}/>
        </button>
    );
}

function PokemonsCards({ info }){

    return (
            <>
                {info.pokemons.map((pokemon) => (
                    <div className={`${Style.card} ${borders.pixelCorners} ${getBorderClassByColor(info.mainColor)}`} >
                      <img src={pokemon.imgUrl} id={Style.cards}/>
                    </div>
                ))}
            </>
      );
  }
 
  function Fraquezas({ info }){

    return (
          <div>
            <div className={Style.AtributesContainer} >
                <h1 style={{color: 'black', fontSize: '20px'}}>FRA:</h1>
                <div className={Style.atributos}>
                    {info.fraquezas.map((atributos) => (
                        <img src={atributos.imgUrl} />
                    ))}
                </div>
            </div>
          </div>
      );
  }

  function SuperEfetivo({ info }){

      return (
        <div>
          <div className={Style.AtributesContainer} >
          <h1 style={{color: 'black', fontSize: '20px'}}>SE:</h1>
              <div className={Style.atributos}>
                  {info.superEfetivo.map((atributos) => (
                      <img src={atributos.imgUrl} />
                  ))}
              </div>
          </div>
        </div>
    );
  }

