import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ItemsContext } from "/Users/Vlad/second-app/src/components/structure/Item/ItemsContextProvider.js";
import { useNavigate, useParams } from "react-router-dom";
import { centeredContainer } from "/Users/Vlad/second-app/src/components/styles.js";
import { useSelector, useDispatch } from "react-redux";
import { addAnimalId, removeAnimalId } from "../../redux/action";

const ItemDetailedView = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [animalsData] = useContext(ItemsContext);
    const animal = animalsData.find((el) => el.animalTitle == id);
    const animalIds = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    return (
        <>
            <Box sx={centeredContainer}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4}>
                        <img alt={animal.AnimalTitle} height="200px" src={animal.imgSrc} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography gutterBottom variant="h5" component="div">
                            {animal.AnimalTitle}
                        </Typography>
                        <Typography variant="body1">{animal.description}</Typography>
                        <Typography>
                            <b>Price: {animal.price} UAH</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button
                                    size="small"
                                    variant="contained"
                                    onClick={() => navigate(-1)}
                                >
                                    Go back
                                </Button>
                            </Grid>
                            <Grid item>
                                {animalIds.has(animal.AnimalTitle) ? (
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={() => dispatch(removeAnimalId(animal.AnimalTitle))}
                                    >
                                        Remove from cart
                                    </Button>
                                ) : (
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={() => dispatch(addAnimalId(animal.AnimalTitle))}
                                    >
                                        Add to cart
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ItemDetailedView;