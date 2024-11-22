import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import './form.css';

export default function Form({ novaTarefa, adicionarTarefa, mudaInput }) {
    return (
        <form action="#" onSubmit={adicionarTarefa}>
            {/* Renderizando o ícone FaPlus dentro do botão */}
            <div className="container">
                <input
                    type="text"
                    value={novaTarefa}
                    onChange={mudaInput}
                    placeholder="Digite sua nova tarefa"
                />
                <button className="btn" type="submit">
                    <FaPlus />
                </button>
            </div>
        </form>
    );
}

Form.propTypes = {
    adicionarTarefa: PropTypes.func.isRequired,
    mudaInput: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
};
