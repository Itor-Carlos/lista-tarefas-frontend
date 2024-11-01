import styled from "styled-components";

export const TarefaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  background-color: ${({ destaque }) => (destaque ? '#fff3cd' : '#f8f9fa')};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const TarefaInfo = styled.div`
`;

export const TarefaNome = styled.p`
  font-weight: bold;
  color: #343a40;
  margin: 0;
  font-size: 1.1rem;
`;

export const TarefaDetalhe = styled.p`
  color: #6c757d;
  margin: 4px 0;
  font-size: 0.95rem;
`;

export const BotaoContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Botao = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #495057;
  }

  &:focus {
    outline: none;
  }
`;