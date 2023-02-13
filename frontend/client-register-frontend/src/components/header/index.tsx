import { HeaderHome } from "./styles";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    return navigate("/login");
  };
  return (
    <HeaderHome>
      <h1>Horus</h1>
      <button onClick={logout}>Sair</button>
    </HeaderHome>
  );
};
