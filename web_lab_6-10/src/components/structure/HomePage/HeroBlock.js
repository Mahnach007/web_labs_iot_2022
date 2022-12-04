import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { useStyles, centeredContainer } from '../../styles.js';

const ZooPicture = require("/Users/Vlad/second-app/src/assets/hero_zoo.jpg");

const HeroBlock = () => {
  const classes = useStyles()

  return (
    <Box sx={centeredContainer} >
      <Grid container spacing={2}>

        <Grid item xs>
          <Box
            component="img"
            src={ZooPicture}
            className={classes.bigImage}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="h2">Zoo defenition</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            A zoo is a
            facility in which animals are housed within enclosures, cared for, displayed to the public,
            and in some cases bred for conservation purposes.The term zoological garden refers to zoology, the study of animals. The term is derived from the Greek ζώον, zoon, 'animal',
            and the suffix -λογία, -logia, 'study of'.
            The abbreviation zoo was first used of the London Zoological Gardens, which was opened for scientific study in 1828 and to the public in 1847.
            In the United States alone, zoos are visited by over 181 million people annually.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBlock;
