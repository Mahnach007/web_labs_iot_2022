import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import AnimalCard from "/Users/Vlad/second-app/src/components/reusable/AnimalCard.js";
import { centeredContainer } from "/Users/Vlad/second-app/src/components/styles.js";
import Typography from "@mui/material/Typography";
import { FilterBlock } from "/Users/Vlad/second-app/src/components/structure/Cataloge/FilterBlock.js";
import { ItemsContext } from "/Users/Vlad/second-app/src/components/structure/Item/ItemsContextProvider.js";
import { FiltersContext } from "/Users/Vlad/second-app/src/components/Filter/FilterWork.js";
import { SearchBlockContext } from "/Users/Vlad/second-app/src/components/structure/navigation-bar/SearchBlockContextProvider.js";

const Catalog = () => {
    const [animalsData] = useContext(ItemsContext);
    const [filtersData] = useContext(FiltersContext);
    const [searchBlockText] = useContext(SearchBlockContext);
    const [animalsToShow, setAnimalsToShow] = useState(animalsData);

    const priceFilterCases = [
        [0, 100],
        [101, 1000],
        [1001, 10000],
        [10001, 1000000],
    ];


    const applyFilters = () => {
        setAnimalsToShow(animalsData);
        let filtered = [...animalsData];
        if (filtersData.PRICE_FILTER !== -1) {
            const [minVal, maxVal] = priceFilterCases[filtersData.PRICE_FILTER];
            filtered = filtered.filter(
                (animal) => animal.price >= minVal && animal.price <= maxVal
            );
        }
        setAnimalsToShow(filtered);
    };

    const discardFilters = () => {
        setAnimalsToShow(animalsData);
    };

    useEffect(() => {
        setAnimalsToShow(animalsData);
        applyFilters();
        setAnimalsToShow(currAnimal => (currAnimal.filter(animal => animal.animalTitle.includes(searchBlockText))))
    }, [searchBlockText]);

    return (
        <>
            <Box sx={{ ...centeredContainer, pt: 1, bgcolor: "#75CE9F" }}>
                <Typography variant="h5" mb="5px">
                    Filters
                </Typography>
                <Grid container sx={{ mb: 5 }}>
                    <FilterBlock
                        applyFilters={applyFilters}
                        discardFilters={discardFilters}
                    />
                </Grid>
                <Typography variant="h5" mb="10px">
                    Catalog
                </Typography>
                <Grid container spacing={4} sx={{ justifyContent: "left" }}>
                    {animalsToShow.map((record, id) => (
                        <Grid item key={record.animalTitle + id}>
                            <AnimalCard
                                imgSrc={record.imgSrc}
                                imgAlt={record.imgSrc}
                                animalTitle={record.animalTitle}
                                description={record.description}
                                price={record.price}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Catalog;