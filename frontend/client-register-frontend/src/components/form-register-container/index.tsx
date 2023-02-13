import { FormContainer } from "./styles";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const login = () => {
    return navigate("/login");
  };
  const requestData = (data: any) => {
    console.log(data);
    axios
      .post("http://127.0.0.1:3000/user", data)
      .then((response: any) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <FormContainer onSubmit={handleSubmit(requestData)}>
      <h1>Horus</h1>
      <input
        type="text"
        placeholder="Escreva seu nome"
        required
        {...register("name")}
      />
      <input
        type="email"
        placeholder="Escreva seu email"
        required
        {...register("email")}
      />
      <input
        type="text"
        placeholder="Escreva seu telefone"
        required
        {...register("tel")}
      />
      <input
        type="password"
        placeholder="Escreva sua senha"
        required
        {...register("password")}
      />
      <div>
        <button type="submit">Registrar</button>
        <button onClick={login}>Ja possui uma conta ?</button>
      </div>
    </FormContainer>
  );
};
