import React from "react";
import PropTypes from "prop-types";
import { FaTrash, FaEdit } from "react-icons/fa";
import './list.css';

export default function Tarefas({ listaDeTarefas, editarTarefa, deletarTarefa }) {
    return (
        <ul className="tarefas">
            {listaDeTarefas.map((tarefa, index) => (
                <li key={index}>
                    {tarefa}
                    <div className="btn__list">
                        <FaEdit
                            className="editar"
                            onClick={() => editarTarefa(index)}
                        />
                        <FaTrash
                            className="deleta"
                            onClick={() => deletarTarefa(index)}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

Tarefas.propTypes = {
    listaDeTarefas: PropTypes.arrayOf(PropTypes.string).isRequired,
    editarTarefa: PropTypes.func.isRequired,
    deletarTarefa: PropTypes.func.isRequired,
};
