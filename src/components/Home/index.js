import React, { useEffect, useState } from "react";
import axios from "axios";
import { useModalContext } from "../../utils/Modal/index";
import Tarefa from "../Tarefa";
import { Message } from "../Message";
import { HomeContainer, TarefasContainer, Titulo, BotaoCadastrarTarefa } from './styles';
import { InputForm } from "../Form";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  const handleDragEnd = async (result) => {
    if (!result.destination) return;
    const reorderedTarefas = Array.from(tarefas);
    const [movedTarefa] = reorderedTarefas.splice(result.source.index, 1);
    reorderedTarefas.splice(result.destination.index, 0, movedTarefa);

    // Atualize a ordem no backend
    await axios.post("http://127.0.0.1:8000/tarefas/reorder", {
      tarefas: reorderedTarefas.map((tarefa, index) => ({ id: tarefa.id, ordem: index + 1 }))
    });

    setTarefas(reorderedTarefas);
  };

  return (
    <HomeContainer>
      {message && <Message message={message} />}

      <BotaoCadastrarTarefa onClick={() => abrirModalEdicao(null)}>
    Criar Nova Tarefa
  </BotaoCadastrarTarefa>

      <InputForm setTarefas={setTarefas} tarefas={tarefas} showMessage={showMessage} />

      <Titulo>Lista de Tarefas</Titulo>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tarefas">
          {(provided) => (
            <TarefasContainer {...provided.droppableProps} ref={provided.innerRef}>
              {tarefas.map((tarefa, index) => (
                <Draggable key={tarefa.id} draggableId={tarefa.id.toString()} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Tarefa
                        key={tarefa.id}
                        tarefa={tarefa}
                        onExcluir={onExcluir}
                        onEditar={() => abrirModalEdicao(tarefa.id)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </TarefasContainer>
          )}
        </Droppable>
      </DragDropContext>
    </HomeContainer>
  );
};
