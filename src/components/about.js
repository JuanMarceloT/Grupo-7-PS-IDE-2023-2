import Style from "../styles/about.module.css"

export default function about (){
    
    return <div className={Style.background} id='about'>
        <h2 className={Style.titulo}> sobre nos </h2>
    
    <div className={Style.aboutConteiner}> 
     <div className={Style.infoConteiner}> 
     <span className={Style.infoSpan}>A IDE é a empresa júnior dos cursos Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do Sul. Formada por alunos interessados em se tornarem empreendedores e profissionais excepcionais, a IDE fornece soluções em software, como sites e sistemas, com preços abaixo do mercado, aliados à excelência da UFRGS, o Instituto de Informática e seus professores, que fornecem apoio técnico e aconselhamento aos estudantes. 
     </span>
     <img className ={Style.imageStyle} src="/img/logo-pixelado-branco.png" alt="logo"/> 
     </div>   
     <img className ={Style.neko1} src="/img/about-pokemon.png" alt="pokemon"/>   
    </div>
    
    
    </div>

}