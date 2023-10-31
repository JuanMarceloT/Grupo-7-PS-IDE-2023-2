import Style from '../styles/footer.module.css'
export default function Footer(){
  return(
  <div className = {Style.footer}>
    <div className = {Style.icons}>
      <button className={Style.icon_buttons}><img className = {Style.icons_images} src="/img/pokemon-logo.png" alt="logo ide"/></button>
      <button className = {Style.icon_buttons}><img className = {Style.icons_images} src="/img/instagram-logo.png" alt="logo ide"/></button>
      <button className = {Style.icon_buttons}><img className = {Style.icons_images} src="/img/linkedin-logo.png" alt="logo ide"/></button>
      <button className = {Style.icon_buttons}><img className = {Style.icons_images} src="/img/ide-logo.png" alt="logo ide"/></button>
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
  )
}
