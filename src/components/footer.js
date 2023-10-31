import Style from '../styles/footer.module.css'
export default function Footer(){

  const linkPokemon = () => {
    // Define the URL you want to open
    const url = "https://example.com"; // Replace with your desired URL

    // Open the link in a new tab
    window.open(url, '_blank');
  };

  const linkInsta = () => {
    // Define the URL you want to open
    const url = "https://example.com"; // Replace with your desired URL

    // Open the link in a new tab
    window.open(url, '_blank');
  };

  const linkEdin = () => {
    // Define the URL you want to open
    const url = "https://example.com"; // Replace with your desired URL

    // Open the link in a new tab
    window.open(url, '_blank');
  };

  const linkIDE = () => {
    // Define the URL you want to open
    const url = "https://example.com"; // Replace with your desired URL

    // Open the link in a new tab
    window.open(url, '_blank');
  };
  return(
  <div className = {Style.footer}>
    <div className = {Style.icons}>
      <button className={Style.icon_buttons}><img className = {Style.icons_images} src="/img/pokemon-logo.png" alt="logo ide"/></button>
      <button className = {Style.icon_buttons}><img className = {Style.icons_images} src="/img/instagram-logo.png" alt="logo ide"/></button>
      <button className = {Style.icon_buttons}><img className = {Style.icons_images} src="/img/linkedin-logo.png" alt="logo ide"/></button>
      <button className = {Style.icon_buttons}><img className = {Style.icons_images} src="/img/ide-logo.png" alt="logo ide"/></button>
    </div>

    <div>
      <p className={Style.footer_text}>
      株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.
      </p>
    </div>

    <div>
      <p className={Style.footer_text}>
      Termos de Uso | Política de Privacidade | Política de Cookies
      </p>
    </div>

    <div>
      Logo ide
    </div>
    
  </div>
  )
}
