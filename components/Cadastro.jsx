// Cadastro.jsx
import React, { useState } from "react";
import "./styles.css";

export function Cadastro({ setItems, items }) {
  const [entries, setEntries] = useState([]);
  const [getEvent, setEvent] = useState();
  const [getCadastrar, setCadastrar] = useState(false);
  const [getBuscar, setBuscar] = useState(false);
  const [getAlterar, setAlterar] = useState(false);
  const [getApagar, setApagar] = useState(false);

  const handleChange = (e) => {
    setEvent(e);
    getCadastrar == true && cadastrar(e);
    getApagar == true && apagar(e);
    getBuscar == true && buscar(e);
    getAlterar == true && alterar(e);
  };

  const cadastrar = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let valueState = false;
    const newObject = {
      ID: formData.get("ID"),
      nome: formData.get("nome"),
      email: formData.get("email"),
      endereço: formData.get("endereco"),
      cidade: formData.get("cidade"),
      estado: formData.get("estado"),
      CEP: formData.get("CEP"),
    };
    entries.forEach((element) => {
      if (element.email == newObject.email) {
        alert("o email já está cadastrado");
        valueState = true;
      }
    });

    if (valueState != true) {
      setEntries((prev) => [...prev, newObject]);
      console.log(entries);
      console.log(newObject);

      e.target.reset();
    } else {
      valueState = false;
      e.target.reset();
    }

    setCadastrar(false);
  };

  const limpar = () => {};

  const buscar = (e) => {};

  const alterar = (e) => {};

  const apagar = (e) => {
    const formData = new FormData(e.target);
    entries.forEach((element) => {
      if (element.email == formData.get("email")) {
        alert("o email já está cadastrado");
      }
    });
  };

  return (
    <div className="cadastro-form">
      {Object.entries({}).map(([key, value]) => (
        <input
          key={key}
          name={key}
          value={value}
          onChange={handleChange}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
        />
      ))}
      <form onSubmit={handleChange}>
        <div>
          <input
            type="cadastro-form input"
            placeholder="ID"
            name="ID"
            id="ID"
          />
        </div>
        <div>
          <input
            type="cadastro-form input"
            placeholder="Nome"
            name="nome"
            id="nome"
          />
        </div>
        <div>
          <input
            type="cadastro-form input"
            placeholder="Email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <input
            type="cadastro-form input"
            placeholder="Endereço"
            name="endereco"
            id="endereco"
          />
        </div>
        <div>
          <input
            type="cadastro-form input"
            placeholder="Cidade"
            name="cidade"
            id="cidade"
          />
        </div>
        <div>
          <input
            type="cadastro-form input"
            placeholder="Estado"
            name="estado"
            id="estado"
          />
        </div>
        <div>
          <input
            type="cadastro-form input"
            placeholder="CEP"
            name="CEP"
            id="CEP"
          />
        </div>
        <div className="button-group">
          <button
            onClick={() => setBuscar(true)}
            type="submit"
            className="btn-buscar"
          >
            Buscar
          </button>
          <button
            onClick={() => setCadastrar(true)}
            type="submit"
            className="btn-cadastrar"
          >
            Cadastrar
          </button>
          <button
            onClick={() => setAlterar(true)}
            type="submit"
            className="btn-alterar"
          >
            Alterar
          </button>
          <button
            onClick={() => setAlterar(true)}
            type="submit"
            className="btn-apagar"
          >
            Apagar
          </button>
        </div>
      </form>
    </div>
  );
}
