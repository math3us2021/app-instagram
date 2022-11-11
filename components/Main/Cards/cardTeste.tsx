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




export default function RecipeReviewCard() {


    return (
        <Card sx={{ width: "480px", height: "auto", maxWidth: 750, border: "1px solid rgb(179, 179, 179)" }}>
            <div className={s.header}>
                <CardHeader
                    //  sx={{ padding: 0 , margin: "0 0 0 0"}}
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
                    title="Conservatório de Música de Lisboa"
                // subheader="September 14, 2016"
                />
            </div>

            <div>
                <Image src="/matheus.jpeg" width={450} height={450} alt="instagram" />
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
                <div className={s.divisao}></div>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <div>
                        <IconButton aria-label="add to favorites">
                            <SentimentSatisfiedAltIcon sx={{fontSize: 30}} />
                        </IconButton>
                        <TextField id="standard-basic" label="Adicione um comentário ..." variant="standard" />
                    </div>

                    <IconButton aria-label="add to favorites">
                            <p className={s.button}>Publicar</p>
                        </IconButton>
                </CardActions>

            </div>


            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        
        </CardContent>
      </Collapse> */}
        </Card>
    );
}