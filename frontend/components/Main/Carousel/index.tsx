import React, { useRef } from "react";
import s from "./style.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconButton } from "@mui/material";

const fotoNome = [
  {
    nome: "Matheus",
    foto: "/1.jpg",
  },
  {
    nome: "Matheus",
    foto: "/2.jpg",
  },
  {
    nome: "Matheus",
    foto: "/3.jpg",
  },
  {
    nome: "Matheus",
    foto: "/4.jpg",
  },
  {
    nome: "Matheus",
    foto: "/5.jpg",
  },
  {
    nome: "Matheus",
    foto: "/2.jpg",
  },
  {
    nome: "Matheus",
    foto: "/1.jpg",
  },
  {
    nome: "Matheus",
    foto: "/2.jpg",
  },
  {
    nome: "Matheus",
    foto: "/1.jpg",
  },
  {
    nome: "Matheus",
    foto: "/2.jpg",
  },
];

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};
type Props = {
  handleOpen: any;
}

const App = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState(true);
  


  function handleOpen1() {
    console.log("Antes"+open);
    setOpen(true)
    console.log("Depois"+open);
    props.handleOpen(open)
    setPhoto(false)

  };
    console.log("Filho "+open)
  // const handleClose = () => setOpen(false);

  const carousel = useRef<any>(null);

  return (
    <div className={s.container}>
      <div className={s.buttonLeft}>
        <IconButton
          aria-label="settings"
          onClick={() => {
            sideScroll(carousel.current, 25, 100, -10);
          }}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
      </div>
      <div className={s.slide} ref={carousel}>
        {fotoNome.map((slide, index) => (
          <div className={s.image} key={index}>
            <img 
            className={photo ? s.photo : s.photoGray} 
            src={slide.foto} 
            onClick={handleOpen1} />          
            <p>{index}</p>
          </div>
        ))}
      </div>
      <div className={s.buttonRight}>
        <IconButton
          aria-label="settings"
          onClick={() => {
            sideScroll(carousel.current, 25, 100, 10);
          }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default App;
