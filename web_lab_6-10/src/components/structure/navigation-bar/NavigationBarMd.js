import React from "react";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchBlock from "/Users/Vlad/second-app/src/components/structure/navigation-bar/SearchBlock.js";
import Grid from "@mui/material/Grid";

import { logoTextStyle } from "/Users/Vlad/second-app/src/components/styles.js";
import { BasicStyledLink } from "/Users/Vlad/second-app/src/components/reusable/StyledLink.js";

const ZooLogo = require("/Users/Vlad/second-app/src/assets/zoo_logo.png");

const NavigationBarMd = ({ pages }) => {
  let linksBody = pages.map((pageInfo) => {
    const [page, path] = pageInfo;

    return (
      <BasicStyledLink to={path}>
        <Button>{page}</Button>
      </BasicStyledLink>
    );
  });

  return (
    <Grid
      container
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          component="img"
          src={ZooLogo}
          sx={{ width: 80 }}
        />
        <Typography variant="h6" sx={{ ...logoTextStyle, display: "flex" }}>
          MY ZOO
        </Typography>
        <Box>{linksBody}</Box>
      </Grid>
      <Grid item>
        <Routes>
          <Route path="/catalog" element={<SearchBlock />}></Route>
        </Routes>
      </Grid>
    </Grid>
  );
};

export default NavigationBarMd;