import Style from "../styles/iniciais.module.css"
import pokemons from "@/../content/pokemons.json";
import borders from "@/styles/borders.module.css"
import React, { useState, useEffect } from 'react';
import { getBorderClassByColor, getBorderClassByType } from '../utils/borderUtils';
import Agua from "@img/agua";
import Fogo from "@img/fogo";
import Planta from "@img/planta"

export default function Iniciais(){

    const [BtnState, setBtnState] = useState(null);
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
        <div className={Style.container} id="iniciais">
            <div className={Style.mainText}>
            {tipo != null ? (<h1 style={{textAlign: 'initial', color: `${pokemons[tipo].mainColor}`}}>{tipo}</h1>) : <h1>CONHECENDO OS STARTERS</h1>}
            </div>
            <div className={`${Style.mainContent} ${tipo == null ? `${borders.pixelCorners} ${borders.purple}` : null}`}>
            {tipo != null ? (
                    <div className={Style.cardscontainer} >
                        <PokemonsCards info={pokemons[tipo]}/>
                    </div>
                )
                 : <div className={Style.nekoContainer} style={{borderRight : '2px solid #603B88', fontSize: '10px'}}>
                        <h1>
                            ESCOLHA UM!
                        </h1>
                        <img src="./img/neko-dormindo.png" alt="" />
                    </div>
                 }
                 {tipo != null ? (
                     <div className={Style.nekoStats} >
                        <Fraquezas info={pokemons[tipo]}/>
                        <img src="./img/neko-piscando.png"/>
                        <SuperEfetivo info={pokemons[tipo]}/>
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
                    <img src="./img/aspas.png" style={{float: 'right', transform: 'scaleX(-1)', alignItems: 'ends'}}/>
                </div>}
            </div>
            <div className={Style.bottomContent}>
                <div className={Style.buttonsContainer}>
                        <BtnTipos tipo="AGUA" id={1} BtnState={BtnState} setBtnState={setBtnState} menu={tipo != null ? 0 : 1} />
                        <BtnTipos tipo="PLANTA" id={2} BtnState={BtnState} setBtnState={setBtnState} menu={tipo != null ? 0 : 1} />
                        <BtnTipos tipo="FOGO" id={3} BtnState={BtnState} setBtnState={setBtnState} menu={tipo != null ? 0 : 1} />
                </div>
                {tipo != null ? (
                    <div className={`${Style.IDEButtonContainer} ${borders.pixelCornersDescription} ${getBorderClassByType(tipo)}`} style={{height: '60%', width: '80%', margin: '0 auto' , display: 'flex', justifyContent: 'center', alignItems:'center', color: 'black'}}>
                    <a  style={{margin: '20px 10px', color: 'black', padding: '0px 20px', fontSize: '14px'}}>
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
        <button onClick={() => props.BtnState === props.id ? props.setBtnState(null) : props.setBtnState(props.id)} style={{ color: props.menu != 1 ? 'transparent' : '#603B88', userSelect: props.menu != 1 ? 'none' : 'auto', width: '100%', margin: '30px 10px'}}>
            <p style={{fontSize: '10px', margin: '0px 10px'}}>{props.tipo}</p>
            <div className={`${borders.pixelCorners} ${props.BtnState == null ? borders.purple : getBorderClassByType(`${props.BtnState == 1 ? 'AGUA' : props.BtnState == 2 ? 'PLANTA' : 'FOGO'}`)}`} style={{height: '6vh',width: '90%', background: `${props.BtnState === props.id ? `${pokemons[props.tipo].mainColor}` : 'white'}`, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                {props.tipo == 'AGUA' && <Agua fill={props.BtnState === props.id ? 'white' : `${props.BtnState == 1 ? '#3B6388' : props.BtnState == 2 ? '#3B8863' : props.BtnState == 3 ?'#AD3F3F' : '#603B88'}`} />}
                {props.tipo == 'PLANTA' && <Planta fill={props.BtnState === props.id ? 'white' : `${props.BtnState == 1 ? '#3B6388' : props.BtnState == 2 ? '#3B8863' : props.BtnState == 3 ?'#AD3F3F' : '#603B88'}`} />}
                {props.tipo == 'FOGO' && <Fogo fill={props.BtnState === props.id ? 'white' : `${props.BtnState == 1 ? '#3B6388' : props.BtnState == 2 ? '#3B8863' : props.BtnState == 3 ?'#AD3F3F' : '#603B88'}`} />}
            </div>
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

