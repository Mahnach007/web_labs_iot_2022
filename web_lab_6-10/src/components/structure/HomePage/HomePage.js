import React from "react";
import HeroBlock from "/Users/Vlad/second-app/src/components/structure/HomePage/HeroBlock.js";
import Cards from "/Users/Vlad/second-app/src/components/structure/HomePage/Cards.js";
import { Box } from "@mui/material";

function HomePage() {
    return (
        <>
            <Box sx={{ bgcolor: "#75CE9F" }}>
                <HeroBlock />
                <Cards />
            </Box>
        </>
    );
}

export default HomePage;