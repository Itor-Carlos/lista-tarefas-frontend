import styled from 'styled-components';

export const MessageContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px;
  background-color: #eaf4fc;
  color: #0d6efd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-20px)')};
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #495057;
  }
`;