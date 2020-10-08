import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/56982135?s=460&u=b9898ac453a162062bbae4746b5e30c2a778045a&v=4" alt="Lucas Xavier"/>
        <div>
          <strong>Lucas Xavier</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br/><br/>
        Rem est deserunt esse illum assumenda, expedita similique aperiam ratione voluptate porro commodi, ullam aliquid impedit, quisquam et. Eligendi numquam debitis totam.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
