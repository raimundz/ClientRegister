import { CardContainer } from "./styles";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Card = () => {
  const [user, setUser] = useState<any>([]);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const [isEditable, setSwitch] = useState<any>(false);
  const [isEditableContact, setSwitchContact] = useState<any>(false);
  const [contacts, setContacts] = useState<any>({});
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    axios
      .get("http://127.0.0.1:3000/user/user", config)
      .then((response: any) => {
        setUser(response.data);
        setContacts(response.data.contacts);
      })
      .catch((error) => console.log(error));
  }, []);
  const switchEditable = () => {
    setSwitch(!isEditable);
    console.log(typeof contacts);
  };
  const switchEditableContact = () => {
    setSwitch(!isEditableContact);
  };
  const deleteReq = () => {
    axios
      .delete(`http://127.0.0.1:3000/contact/${user.id}`, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    localStorage.clear();
    navigate("/login");
  };
  return (
    <CardContainer>
      {isEditable == false ? (
        <div>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <h2>{user.tel}</h2>
          <button onClick={switchEditable}>Editar</button>
        </div>
      ) : (
        <form>
          <input type="text" placeholder={user.name} {...register("name")} />
          <input type="email" placeholder={user.email} {...register("email")} />
          <input type="text" placeholder={user.tel} {...register("tel")} />
          <input
            type="text"
            placeholder="Nova senha"
            {...register("password")}
          />
          <button>Enviar</button>
          <button onClick={deleteReq}>Apagar conta</button>
        </form>
      )}
      {/* <div className="ContactsContainer">
        {contacts.map((elem: any, index: any) => {})}
        <button>Adicionar contato</button>
      </div> */}
    </CardContainer>
  );
};
