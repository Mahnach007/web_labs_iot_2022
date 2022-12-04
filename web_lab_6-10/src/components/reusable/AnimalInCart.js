import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { addAnimalId, removeAnimalId } from "/Users/Vlad/second-app/src/components/redux/action.js";

const AnimalInCart = ({ imgSrc, imgAlt, description, animalTitle, price }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Grid container spacing={2} sx={{ bgcolor: "#75CE9F" }}>
                <Grid item xs={3}>
                    <img
                        alt={animalTitle}
                        src={imgSrc}
                        height="230px"
                        width="100%"
                    />
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h5" component="div">
                        {animalTitle}
                    </Typography>
                    <Typography variant="body1">{description}</Typography>
                    <Typography>
                        <b>Price: {price} UAH</b>
                    </Typography>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => dispatch(removeAnimalId(animalTitle))}
                    >
                        Remove from cart
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default AnimalInCart;