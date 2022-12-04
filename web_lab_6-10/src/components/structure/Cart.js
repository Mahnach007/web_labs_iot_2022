import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AnimalInCart from "/Users/Vlad/second-app/src/components/reusable/AnimalInCart.js";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addAnimalId, removeAnimalId } from "/Users/Vlad/second-app/src/components/redux/action.js";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "/Users/Vlad/second-app/src/components/structure/Item/ItemsContextProvider.js";

function Cart() {
  const [animalsData, setAnimalsData] = useContext(ItemsContext);
  const [animalsToShow, setAnimalsToShow] = useState(animalsData);
  const animalIds = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (animalIds.size == 0) {
    return (
      <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}

        >
          <Grid item xs={3} >
            <Typography>Here will be your items</Typography>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid container p={4} sx={{ bgcolor: "#75CE9F" }}>
          <Typography variant="h4" mb={3}>
            Shopping cart
          </Typography>
          {animalsToShow
            .filter((record) => animalIds.has(record.animalTitle))
            .map((record, id) => (
              <AnimalInCart
                imgSrc={record.imgSrc}
                imgAlt={record.imgSrc}
                animalTitle={record.animalTitle}
                description={record.description}
                price={record.price}
              />
            ))}
          <Typography variant="h4" mt={3}>
            You have to pay{" "}
            {animalsToShow
              .filter((record) => animalIds.has(record.animalTitle))
              .reduce(
                (acc, currAnimal) => acc + parseInt(currAnimal.price),
                0
              )}{" "}
            UAH
          </Typography>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate(-1)}
              >
                Go back
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  animalIds.forEach((id) => dispatch(removeAnimalId(id)));
                }}
              >
                Buy
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Cart;