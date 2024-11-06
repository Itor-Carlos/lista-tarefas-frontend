import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 25px;
  max-width: 700px;
  margin: 0 auto;
  background-color: #f5f7fb;
  border-radius: 16px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.08);
`;

export const Titulo = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #2e3a59;
  margin-bottom: 28px;
  text-align: center;
`;

export const TarefasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);
`;

export const BotaoCadastrarTarefa = styled.button`
  padding: 14px 28px;
  font-size: 1rem;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;
