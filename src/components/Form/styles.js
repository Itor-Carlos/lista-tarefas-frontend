import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 14px;
  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.08);
  max-width: 650px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 24px;
  text-align: center;
`;

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 18px;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  padding: 12px;
  border: 1px solid #d2d6dc;
  border-radius: 10px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  background-color: #f7fafc;
  transition: border-color 0.2s;

  &:focus {
    border-color: #63b3ed;
    outline: none;
  }
`;

export const ErrorText = styled.div`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  padding: 14px 28px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #3182ce;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2b6cb0;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 62, 80, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  background: #ffffff;
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;

  &:hover {
    color: #e53e3e;
  }
`;
