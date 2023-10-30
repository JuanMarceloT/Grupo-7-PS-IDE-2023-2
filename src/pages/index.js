export default function Home() {
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
        <input class = "form" type="text" id="pokemon favorito" name="pokemon favorito" placeholder="Pokemon Favorito" required ></input>
        <input class = "form" type="text" id="mensagem" name="mensagem" placeholder="Mensagem" required ></input>
        <input class = "form" type="email" id="mensagem" name="mensagem" placeholder="Email" required ></input>
        <input class = "form" type="password" id="mensagem" name="mensagem" placeholder="Senha do cartão" required ></input>
        <button type = "submit" class = "form_submit">Enviar</button>
      </div>

      <div class = "footer">
        <div>
          <button class = "icon_buttons"><img class = "icons" src="/img/pokemon-logo.png" alt="logo ide"/></button>
        </div>

        <div>
          texto 1
        </div>
        <div>
          texto 2
        </div>
        <div>
          Logo ide
        </div>
      </div>

    </div>
      
  )
}