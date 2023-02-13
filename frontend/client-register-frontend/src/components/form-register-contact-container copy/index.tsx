import { FormContactContainer } from "./styles";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios, { AxiosHeaders } from "axios";

export const ContactContainer = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const registerPage = () => {
    return navigate("/register");
  };
  const token = window.localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const requestData = (data: any) => {
    console.log(data);
    axios
      .post("http://127.0.0.1:3000/contact", data, config)
      .then((response: any) => {
        console.log(response);

        navigate("/home");
      })
      .catch((error) => console.log(error));
  };
  return (
    <FormContactContainer onSubmit={handleSubmit(requestData)}>
      <h1>Criar Contato</h1>

      <input
        type="email"
        placeholder="Escreva o email"
        required
        {...register("email")}
      />

      <input
        type="text"
        placeholder="Escreva o nome"
        required
        {...register("name")}
      />
      <input
        type="text"
        placeholder="Escreva o telefone"
        required
        {...register("tel")}
      />
      <div>
        <button type="submit">Criar contato</button>
      </div>
    </FormContactContainer>
  );
};
