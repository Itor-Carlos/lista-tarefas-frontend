import styled from "styled-components";

export const TarefaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: ${({ destaque }) => (destaque ? '#fefcbf' : '#edf2f7')};
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TarefaInfo = styled.div`
`;

export const TarefaNome = styled.p`
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  font-size: 1.2rem;
`;

export const TarefaDetalhe = styled.p`
  color: #718096;
  margin: 4px 0;
  font-size: 1rem;
`;

export const BotaoContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Botao = styled.button`
  background: none;
  border: none;
  color: #a0aec0;
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #4a5568;
  }

  &:focus {
    outline: none;
  }
`;
