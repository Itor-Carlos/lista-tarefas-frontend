import { useEffect, useState } from "react";
import { CloseButton, MessageContainer } from "./styles";

export const Message = ({ message, duration = 3000, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    show && (
      <MessageContainer show={show}>
        <span>{message}</span>
        <CloseButton onClick={() => {
          setShow(false);
          onClose && onClose();
        }}>
          &times;
        </CloseButton>
      </MessageContainer>
    )
  );
};
