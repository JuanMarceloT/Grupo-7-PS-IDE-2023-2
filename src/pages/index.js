import React, { useState } from "react";
export default function Home() {
  const [userInput, setUserInput] = useState('');
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const showAlert = () => {
    alert("Seu pokemon favorito é: " + userInput);
  };

  return (
    <div>
      <div class="container1">
        <div class="header">
            <p>HOME</p>
            <p>INICIAIS</p>
            <p>SOBRE</p>
            <p>FORMULARIO</p>
        </div>
        <div class="titulo-imagem">
          <img class="neko1" src="/img/neko-anotando.png" alt="logo ide"/>
          <div class="titulo">
            <p>POKE</p>
            <p><spam id="ide-vermelho">IDE</spam>X</p>
            <button class= "border">Start</button>
          </div>
        </div>
        
      </div>





      <div class = "form_table">
        <h1 class = "form_title">
          Envie uma mensagem para nós
        </h1>
        <form class= "form_table"><input class = "form" value={userInput} onChange={handleInputChange} type="text" id="pokemon favorito" name="pokemon favorito" placeholder="Pokemon Favorito" required ></input>
        <input class = "form" type="text" id="mensagem" name="mensagem" placeholder="Mensagem" required ></input>
        <input class = "form" type="email" id="mensagem" name="mensagem" placeholder="Email" required ></input>
        <input class = "form" type="password" id="mensagem" name="mensagem" placeholder="Senha do cartão" required ></input>
        <button type = "submit" onClick = {showAlert} class = "form_submit">Enviar</button>
        </form>
        
      </div>

      <div class = "footer">
        <div class = "icons">
          <button class="icon_buttons"><img class = "icons_images" src="/img/pokemon-logo.png" alt="logo ide"/></button>
          <button class = "icon_buttons"><img class = "icons_images" src="/img/instagram-logo.png" alt="logo ide"/></button>
          <button class = "icon_buttons"><img class = "icons_images" src="/img/linkedin-logo.png" alt="logo ide"/></button>
          <button class = "icon_buttons"><img class = "icons_images" src="/img/ide-logo.png" alt="logo ide"/></button>
        </div>

        <div>
          <p>
          株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.
          </p>
        </div>
        <div>
          <p>
          Termos de Uso | Política de Privacidade | Política de Cookies
          </p>
        </div>
        <div>
          Logo ide
        </div>
      </div>

    </div>
      
  )
}