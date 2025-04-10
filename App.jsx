// App.jsx
import React, { useState } from "react";
import { Home } from "./components/Home";
import { Cadastro } from "./components/Cadastro";
import { Listagem } from "./components/Listagem";
import "./components/styles.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [items, setItems] = useState([]);

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">Prova 01 - Parte 02</h1>
      </div>
      <nav className="app-menu">
        <button onClick={() => setPage("home")}>🏠</button>
        <button onClick={() => setPage("cadastro")}>Cadastro</button>
        <button onClick={() => setPage("listagem")}>Listagem</button>
      </nav>
      <div className="app-content">
        {page === "home" && <Home />}
        {page === "cadastro" && <Cadastro  />}
        {page === "listagem" && <Listagem />}
      </div>
    </div>
  );
}
