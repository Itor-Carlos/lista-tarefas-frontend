import React, { useEffect, useState } from "react";
import axios from "axios";
import { useModalContext } from "../../utils/Modal/index";
import Tarefa from "../Tarefa";
import { Message } from "../Message";
import { HomeContainer, TarefasContainer, Titulo } from './styles';
import { InputForm } from "../Form";

export const Home = () => {
  const [tarefas, setTarefas] = useState([]);
  const [message, setMessage] = useState('');
  const { isModalOpen, idTarefaEditando, abrirModalEdicao, fecharModal } = useModalContext();

  const showMessage = (newMessage) => {
    setMessage(newMessage);
    setTimeout(() => setMessage(''), 3000);
  };

  const fetchTarefas = async () => {
    const { data, status } = await axios.get('http://127.0.0.1:8000/tarefas');
    if (status === 200) {
      setTarefas(data);
    } else {
      showMessage("Não foi possível fazer a listagem de tarefas.");
    }
  };

  const onExcluir = async (tarefaId) => {
    await axios.delete(`http://127.0.0.1:8000/tarefas/${tarefaId}`);
    showMessage(`Tarefa de id ${tarefaId} deletada com sucesso`);
    setTarefas(tarefas.filter(tarefa => tarefa.id !== tarefaId));
  };

  useEffect(() => {
    fetchTarefas();
  }, []);

  return (
    <HomeContainer>
      {message && <Message message={message} />}

      <button onClick={() => abrirModalEdicao(null)}>Criar Nova Tarefa</button>

      <InputForm showMessage={showMessage} />

      <Titulo>Lista de Tarefas</Titulo>
      <TarefasContainer>
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            onExcluir={onExcluir}
            onEditar={() => abrirModalEdicao(tarefa.id)}
          />
        ))}
      </TarefasContainer>
    </HomeContainer>
  );
};
