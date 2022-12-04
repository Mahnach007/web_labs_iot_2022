import React from "react";
import AnimalCard from "/Users/Vlad/second-app/src/components/reusable/AnimalCard.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { centeredContainer } from "/Users/Vlad/second-app/src/components/styles.js";
import { BasicStyledLink } from "/Users/Vlad/second-app/src/components/reusable/StyledLink.js";
import { data } from "/Users/Vlad/second-app/src/components/data.js";



const Cards = () => {
  const catalogPath = "/catalog";

  return (
    <Box sx={centeredContainer}>
      <Typography variant="h4" mb="10px">
        Animals
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        {data.map((record, id) => (
          <Grid item key={record.animalTitle + id}>
            <AnimalCard
              imgSrc={record.imgSrc}
              animalTitle={record.animalTitle}
              description={record.description}
              price={record.price}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container sx={{ my: 5, justifyContent: "center" }}>
        <BasicStyledLink to={catalogPath}>
          <Button variant="contained" size="large" sx={{bgcolor: "#01A66F"}}>
            More animals
          </Button>
        </BasicStyledLink>
      </Grid>
    </Box>
  );
};

export default Cards;

