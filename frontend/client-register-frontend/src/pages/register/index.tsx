import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/form-register-container/index";
import { RegisterContainer } from "./styles";

export const Register = () => {
  return <RegisterContainer>
    <RegisterForm></RegisterForm>
  </RegisterContainer>;
};
