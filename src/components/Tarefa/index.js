import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Botao, BotaoContainer, TarefaContainer, TarefaDetalhe, TarefaInfo, TarefaNome } from './styles';
import { convertData } from '../../utils/convert_data';

const Tarefa = ({ tarefa, onExcluir, onEditar }) => {
  const destaque = tarefa.custo >= 1000;

  return (
    <TarefaContainer destaque={destaque}>
      <TarefaInfo>
        <TarefaNome>{tarefa.nome}</TarefaNome>
        <TarefaDetalhe>Custo: R${parseFloat(tarefa.custo).toFixed(2)}</TarefaDetalhe>
        <TarefaDetalhe>Data Limite: {convertData(tarefa.data_limite)}</TarefaDetalhe>
      </TarefaInfo>
      <BotaoContainer>
        <Botao onClick={() => onEditar(tarefa.id)}>
          <FaEdit />
        </Botao>
        <Botao onClick={() => onExcluir(tarefa.id)}>
          <FaTrashAlt />
        </Botao>
      </BotaoContainer>
    </TarefaContainer>
  );
};

export default Tarefa;
