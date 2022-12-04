import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "material-ui-image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BasicStyledLink } from "/Users/Vlad/second-app/src/components/reusable/StyledLink.js";
import { useSelector, useDispatch } from "react-redux";
import { addAnimalId, removeAnimalId } from "/Users/Vlad/second-app/src/components/redux/action.js";

const AnimalCard = ({ imgSrc, imgAlt, description, animalTitle, price }) => {
  const animalIds = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <CardMedia>
            <Image src={imgSrc} height="140" />
          </CardMedia>
          <Typography gutterBottom variant="h5" component="div">
            {animalTitle}
          </Typography>
          <Typography>
            <b>Price: {price} UAH</b>
          </Typography>
          <Typography variant="body1" sx={{ minHeight: 100 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {animalIds.has(animalTitle) ? (
            <Button
              size="small"
              variant="contained"
              onClick={() => dispatch(removeAnimalId(animalTitle))}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              size="small"
              variant="contained"
              onClick={() => dispatch(addAnimalId(animalTitle))}
            >
              Add to cart
            </Button>
          )}
          <Button size="small" variant="contained">
            <BasicStyledLink to={"/item/" + animalTitle} sx={{ color: "white" }}>
              View More
            </BasicStyledLink>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default AnimalCard;