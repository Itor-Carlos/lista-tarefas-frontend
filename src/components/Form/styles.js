import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 20px;
`;

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #495057;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: #80bdff;
    outline: none;
  }
`;

export const ErrorText = styled.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 4px;
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`;
