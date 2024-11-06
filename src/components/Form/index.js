import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useModalContext } from "../../utils/Modal/index";
import {
  FormContainer,
  FormTitle,
  FormFieldContainer,
  Label,
  InputField,
  ErrorText,
  SubmitButton
} from "./styles";
import { CloseButton, ModalContainer, ModalOverlay } from "./styles";
import { FaTimes } from 'react-icons/fa';
import * as Yup from 'yup';

export const InputForm = ({ setTarefas,showMessage }) => {
  const { isModalOpen, idTarefaEditando, fecharModal } = useModalContext();
  const [initialValues, setInitialValues] = useState({
    nome: "",
    custo: "",
    data_limite: new Date().toISOString().split("T")[0]
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const validationSchema = Yup.object({
    nome: Yup.string()
      .required("O campo 'Nome' é obrigatório")
      .min(4, "O mínimo para o nome são 4 caracteres")
      .max(50, "O máximo para o nome são 50 caracteres"),
    
    custo: Yup.number()
      .typeError("O campo 'Custo' deve ser numérico")
      .required("O campo 'Custo' é obrigatório")
      .min(0.1, "O custo deve ter valor mínimo de R$ 0,1"),
    
    data_limite: Yup.date()
      .required("O campo 'Data limite' é obrigatório")
      .min(today, "A data limite não pode ser anterior à data atual")
  });
  
  useEffect(() => {
    if (idTarefaEditando && isModalOpen) {
      axios.get(`http://127.0.0.1:8000/tarefas/${idTarefaEditando}`)
        .then(response => {
          setInitialValues({
            nome: response.data.nome,
            custo: response.data.custo,
            data_limite: response.data.data_limite
          });
        })
        .catch(() => showMessage("Erro ao carregar os dados da tarefa"));
    } else {
      setInitialValues({
        nome: "",
        custo: "",
        data_limite: new Date().toISOString().split("T")[0]
      });
    }
  }, [idTarefaEditando, isModalOpen]);

  const handleSubmit = async (values) => {
    try {
      if (idTarefaEditando) {
        await axios.put(`http://127.0.0.1:8000/tarefas/${idTarefaEditando}`, values);
        showMessage("Tarefa editada com sucesso");
      } else {
        const {data} = await axios.post('http://127.0.0.1:8000/tarefas', values);
        setTarefas((tarefas) => [...tarefas, data]);
        showMessage("Tarefa criada com sucesso");
      }
      fecharModal();
    } catch (error) {
      showMessage("Erro ao salvar a tarefa");
    }
  };

  return (
    isModalOpen && (
      <ModalOverlay onClick={fecharModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <FormContainer>
            <FormTitle>{idTarefaEditando ? "Editar Tarefa" : "Criar Tarefa"}</FormTitle>
            <Formik
              enableReinitialize
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <FormFieldContainer>
                    <Label>Nome</Label>
                    <Field as={InputField} type="text" name="nome" />
                    <ErrorMessage name="nome" component={ErrorText} />
                  </FormFieldContainer>
                  <FormFieldContainer>
                    <Label>Custo</Label>
                    <Field as={InputField} type="text" name="custo" />
                    <ErrorMessage name="custo" component={ErrorText} />
                  </FormFieldContainer>
                  <FormFieldContainer>
                    <Label>Data limite</Label>
                    <Field as={InputField} type="date" name="data_limite" />
                    <ErrorMessage name="data_limite" component={ErrorText} />
                  </FormFieldContainer>
                  <SubmitButton type="submit">{idTarefaEditando ? "Editar" : "Criar"}</SubmitButton>
                </Form>
              )}
            </Formik>
          </FormContainer>
          <CloseButton className="fa fa-times" onClick={fecharModal}>
            <FaTimes/>
          </CloseButton>
        </ModalContainer>
      </ModalOverlay>
    )
  );
};
