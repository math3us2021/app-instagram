import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { url } from 'inspector';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Image from 'next/image'
import s from './style.module.scss'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { TextField } from '@mui/material';
import { BsThreeDots } from "react-icons/bs";

type Props = {
    photo: string;
    name: string;
    subName: string;
}


export default function RecipeReviewCard(props: Props) {


    return (

        <Card sx={{ width: "480px", height: "auto", maxWidth: 750, border: "1px solid var(--border)",  boxShadow: "0px 0px 10px  rgba(0,0,0,0.2)", marginTop: "25px" }} className={s.card} >
            <div className={s.header}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500], margin: "0px" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <BsThreeDots />
                        </IconButton>
                    }
                    title={props.name}
                subheader={props.subName}
                />
            </div>


            <div className={s.image}>
                <Image src={props.photo} width={400} height={400} alt="instagram" />
            </div>
            <CardActions disableSpacing>

                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>

                <IconButton aria-label="share">
                    <ChatBubbleOutlineIcon />
                </IconButton>

            </CardActions>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Comentarios...
                </Typography>
            </CardContent>
            <div>

                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <div>
                        <IconButton aria-label="add to favorites">
                            <SentimentSatisfiedAltIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                        <TextField id="standard-basic" label="Adicione um comentário ..." variant="standard" />
                    </div>

                    <IconButton aria-label="add to favorites">
                        <p className={s.button}>Publicar</p>
                    </IconButton>
                </CardActions>
            </div>
        </Card>
    );
}