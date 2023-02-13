import { HomePage } from "./styles";
import React from "react";
import { Header } from "../../components/header/index";
import { Card } from "../../components/user-card/index";

export const Home = () => {
  return (
    <HomePage>
      <Header />

      <Card />
    </HomePage>
  );
};
