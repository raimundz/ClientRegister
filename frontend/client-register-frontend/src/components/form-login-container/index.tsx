import { FormContainer } from "./styles";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios, { AxiosHeaders } from "axios";

export const LoginContainer = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const registerPage = () => {
    return navigate("/register");
  };
  const requestData = (data: any) => {
    console.log(data);
    axios
      .post("http://127.0.0.1:3000/login", data)
      .then((response: any) => {
        console.log(response);
        window.localStorage.clear();
        window.localStorage.setItem("token", response.data.data);
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };
  return (
    <FormContainer onSubmit={handleSubmit(requestData)}>
      <h1>Horus</h1>

      <input
        type="email"
        placeholder="Escreva seu email"
        required
        {...register("email")}
      />

      <input
        type="text"
        placeholder="Escreva sua senha"
        required
        {...register("password")}
      />
      <div>
        <button type="submit">Logar</button>
        <button onClick={registerPage}>Ainda não possui uma conta ?</button>
      </div>
    </FormContainer>
  );
};
