import React from "react";
import s from "./style.module.scss";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardSugestoes from "./cardSugestoes/sugestoes";
import OutputIcon from '@mui/icons-material/Output';
import { useRouter } from "next/router";

export const fotoNome = [
  {
    name: "Matheus",
    photo: "/1.jpg",
    subName: "Matheus",
  },
  {
    name: "marcelo",
    photo: "/2.jpg",
    subName: "Marcelo Barbosa",
  },
  {
    name: "Veronica",
    photo: "/3.jpg",
    subName: "Veronica Cruz",
  },
];

export default function index() {

  const router = useRouter();

  return (
    <div className={s.box}>
      <div>
        <CardHeader
          avatar={<img className={s.foto} src="/matheus.jpeg" alt="" />}
          action={
            <IconButton aria-label="settings" color="error">
              <OutputIcon onClick={()=> router.push("/login")} />
            </IconButton>
          }
          title="Matheusbf"
          subheader="Matheus Ferreira"
        />
      </div>

      <div>
        <div>
          <p>Sugestões para você</p>
        </div>
        <div>
          {fotoNome.map((item, index) => (
            <div key={index}>
              <CardSugestoes
                photo={item.photo}
                name={item.name}
                subName={item.subName}
              />
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}
