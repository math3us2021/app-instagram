import React from "react";
import s from "./style.module.scss";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TextField } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";

export default function Home() {
  function api() {
    const token = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .get("http://localhost:3333/us", token)
      .then((res) => {
        console.log(res.data);
        // console.log(token)
      })
      .catch((err) => {
        console.log("Não foi possível conectar ao servidor");
      });
  }

  return (
    <div>
      <div className={s.menuHorizontal}>
        <div>
          <button>instagram</button>
        </div>

        <div className={s.input}>
          <TextField
            id="outlined-basic"
            label="Pesquisar"
            variant="outlined"
            sx={{ width: "300px" }}
          ></TextField>
        </div>
        <div>
          <FavoriteBorderIcon />
        </div>
      </div>

      <div className={s.box}>
        <div className={s.buttonMenu}>
          <InstagramIcon sx={{ fontSize: 30, color: "red" }} />
        </div>
        <div className={s.buttonMenu}>
          <HomeIcon sx={{ fontSize: 30 }} />
          <p>Página Inicial</p>
        </div>
        <div className={s.buttonMenu}>
          <SearchIcon sx={{ fontSize: 30 }} />
          <p>Pesquisa</p>
        </div>
        <div className={s.buttonMenu}>
          <ExploreIcon sx={{ fontSize: 30 }} />
          <p>Explorar</p>
        </div>
        <div className={s.buttonMenu}>
          <ChatBubbleOutlineIcon sx={{ fontSize: 30 }} />
          <p>Mensagem</p>
        </div>
        <div className={s.buttonMenu}>
          <FavoriteBorderIcon sx={{ fontSize: 30 }} />
          <p>Notificações</p>
        </div>
        <div className={s.buttonMenu}>
          <AddCircleOutlineIcon sx={{ fontSize: 30 }} />
          <p>Adicionar</p>
        </div>
        <div className={s.buttonMenu}>
          <AccountCircleIcon sx={{ fontSize: 30 }} />
          <p>Perfil</p>
        </div>
        <div>
          <button onClick={() => api() }>Gerar Api, para ver token funcionando</button>
        </div>
      </div>
    </div>
  );
}
