import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Route, Routes } from "react-router-dom";
import SearchBlock from "./SearchBlock";
import { BasicStyledLink } from "/Users/Vlad/second-app/src/components/reusable/StyledLink.js";
import { logoTextStyle } from "/Users/Vlad/second-app/src/components/styles.js";

const ZooLogo = require("/Users/Vlad/second-app/src/assets/zoo_logo.png");

const NavigationBarXs = ({
  pages,
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
}) => {
  const menuItems = pages.map((pageInfo) => {
    const [page, path] = pageInfo;

    return (
      <BasicStyledLink to={path}>
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      </BasicStyledLink>
    );
  });

  return (
    <Grid
      item
      sx={{
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={6}>
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          keepMounted
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {menuItems}
        </Menu>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          component="img"
          src={ZooLogo}
          sx={{ width: 80 }}
        />
        <Typography
          variant="h5"
          component="a"
          href=""
          sx={{
            ...logoTextStyle,
          }}
        >
          MY ZOO
        </Typography>
      </Grid>

      <Routes>
        <Route
          path="/catalog"
          element={
            <Grid item xs={8} sx={{ mb: 2 }}>
              <SearchBlock />
            </Grid>
          }
        ></Route>
      </Routes>

    </Grid>
  );
};

export default NavigationBarXs;