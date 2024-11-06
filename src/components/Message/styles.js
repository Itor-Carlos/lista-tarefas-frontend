import styled from 'styled-components';

export const MessageContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 18px;
  background-color: #e6fffa;
  color: #38b2ac;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s, opacity 0.3s;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-20px)')};
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #4a5568;
  font-size: 1.4rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #c53030;
  }
`;
