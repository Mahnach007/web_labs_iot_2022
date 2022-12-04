import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Stack, Typography } from "@mui/material";
import { FacebookIconStyled, InstagramIconStyled, LinkedInIconStyled } from "../reusable/Icons";
import { centeredContainer } from "../styles";


const ZooLogo2 = require("/Users/Vlad/second-app/src/assets/zoo_logo.png");

const FooterBlock = () => {

    return (
        <Box sx={{...centeredContainer, py:2, bgcolor:"#01A66F", maxWidth: "xs"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color={"white"}>MY ZOO</Typography>
            <Typography variant="body2" color={"white"}>
            A zoo is a 
            facility in which animals are housed within enclosures, cared for, displayed to the public, 
            and in some cases bred for conservation purposes.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Stack direction="row" alignItems="center" justifyContent="center">
          <Box
            component="img"
            src={ZooLogo2}
            sx={{width: 90}}
          />
          </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{m: "auto"}} >
            <Box display="flex" justifyContent="flex-end" alignItems="center">
            <FacebookIconStyled sx={{color: "white"}}/>
            <InstagramIconStyled sx={{color: "white"}}/>
            <LinkedInIconStyled sx={{color: "white"}}/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}


export default FooterBlock;