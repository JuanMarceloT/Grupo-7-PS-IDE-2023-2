import Home from '../components/home'
import Form from '../components/form'
import Footer from '../components/footer'
import Header from '../components/header'
import About from '../components/about'
import Iniciais from '@/components/Iniciais.jsx'


export default function Main() {
  

  return (
      <>
        <Header/>
        <Home/>
        <Iniciais/>
        <About/>
        <Form/>
        <Footer/>
      
      </>
  )
}