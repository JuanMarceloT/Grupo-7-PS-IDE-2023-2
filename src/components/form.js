import React, { useState } from "react";
import Style from '../styles/form.module.css';

export default function Form() {
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Email validation
    if (!value.includes('@')) {
      setEmailError('Email must contain "@"');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    if (userInput && message && email && password && !emailError) {
      alert("Seu pokemon favorito é: " + userInput);
    }
  };

  return (
    <div className={Style.form_table}>
      <h1 className={Style.form_title}>
        Envie uma mensagem para nós
      </h1>
      <form className={Style.form_table} onSubmit={handleSubmit}>
        <input className={Style.form} value={userInput} onChange={handleInputChange} type="text" id="pokemon favorito" name="pokemon favorito" placeholder="Pokemon Favorito" required />
        <input className={Style.form} value={message} onChange={handleMessageChange} type="text" id="mensagem" name="mensagem" placeholder="Mensagem" required />
        <input className={Style.form} value={email} onChange={handleEmailChange} type="email" id="email" name="email" placeholder="Email" required />
        <input className={Style.form} value={password} onChange={handlePasswordChange} type="password" id="senha" name="senha" placeholder="Senha do cartão" required />
        <button type="submit" className="form_submit">Enviar</button>
      </form>
    </div>
  );
}
