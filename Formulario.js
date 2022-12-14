import React from 'react';
import './Formulario.css';

const Formulario = () => {

  return (

    <form className='form-container' action='' method="POST">

      <div className="ti-tulo">
        <h1>Formulario de Contato</h1>
        <p>Obrigado pela sua Visita!. Utilice o formulario abaixo para nos contatar.</p>
      </div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text"
          name='text'
          id='name'
          placeholder='Digite o seu nome'
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="Forename">Sobre Nome:</label>
        <input type="text"
          name='text'
          id='name'
          placeholder='Digite o seu Sobre nome'
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input type="email"
          name='email'
          id='email'
          placeholder='Digite o seu e-mail'
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="tel">Telefone:</label>
        <input type="tel"
          name='tel'
          id='tel'
          placeholder='Digite o seu telefone'
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="subject">Asunto:</label>
        <input type="text"
          name='subject'
          id='subject'
          placeholder='Digite o seu asunto'
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="message">Menssagem:</label>
        <textarea name="message" id="message" cols="30" rows="8" autoFocus="true" placeholder='Digite o seu menssagem'></textarea>


      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Formulario;
