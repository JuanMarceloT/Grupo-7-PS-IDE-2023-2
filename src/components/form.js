import React, { useState } from "react";
export default function Form() {
  const [userInput, setUserInput] = useState('');
  
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const showAlert = () => {
    alert("Seu pokemon favorito é: " + userInput);
  };
  
  return(
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
  )
}