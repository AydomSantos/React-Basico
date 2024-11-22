import React, { Component } from "react";
import "./main.css";
import Form from "./Form/index";
import Tarefas from './List/index';

export default class Main extends Component {
  state = {
    novaTarefa: "",
    listaDeTarefas: JSON.parse(localStorage.getItem("listaDeTarefas")) || [],
    editando: false,
    indexEditando: null,
  };

  mudaInput = (event) => {
    this.setState({ novaTarefa: event.target.value });
  };

  adicionarTarefa = (event) => {
    event.preventDefault();
    const { novaTarefa, listaDeTarefas, editando, indexEditando } = this.state;

    if (novaTarefa.trim() === "") return;

    const novasTarefas = [...listaDeTarefas];

    if (editando) {
      novasTarefas[indexEditando] = novaTarefa;
      this.setState({
        listaDeTarefas: novasTarefas,
        novaTarefa: "",
        editando: false,
        indexEditando: null,
      });
    } else {
      novasTarefas.push(novaTarefa);
      this.setState({ listaDeTarefas: novasTarefas, novaTarefa: "" });
    }

    localStorage.setItem("listaDeTarefas", JSON.stringify(novasTarefas));
  };

  deletarTarefa = (index) => {
    const listaDeTarefas = this.state.listaDeTarefas.filter((_, i) => i !== index);
    this.setState({ listaDeTarefas });
    localStorage.setItem("listaDeTarefas", JSON.stringify(listaDeTarefas));
  };

  editarTarefa = (index) => {
    this.setState({
      novaTarefa: this.state.listaDeTarefas[index],
      editando: true,
      indexEditando: index,
    });
  };

  render() {
    const { novaTarefa, listaDeTarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          adicionarTarefa={this.adicionarTarefa}
          novaTarefa={novaTarefa}
          mudaInput={this.mudaInput}
        />
        <Tarefas
          listaDeTarefas={listaDeTarefas} 
          editarTarefa={this.editarTarefa}
          deletarTarefa={this.deletarTarefa}
        />
      </div>
    );
  }
}
