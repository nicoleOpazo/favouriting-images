import React, { useEffect, useState } from "react";
import { Grid, Box, CircularProgress, Button } from "@mui/material";
import { SideBarComponent, Image } from "../components";

const AllCats = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    async function refreshImages() {
        setLoading(true);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12', {
                headers: {
                    "content-type": "application/json",
                    'x-api-key': process.env.REACT_APP_CAT_API_KEY
                }
            });
            const json = await response.json();
            setImages(json);
            setLoading(false);
        }
        catch (e) {
            console.error('Error fetching images', e);
        }
    }

    useEffect(() => {
        refreshImages();
    }, [])

    const handleLoadMore = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12', {
                headers: {
                    "content-type": "application/json",
                    'x-api-key': process.env.REACT_APP_CAT_API_KEY
                }
            });
            const json = await response.json();
            setImages(prevImages => [...prevImages, ...json]);
            setLoading(false);
        }
        catch (e) {
            console.error('Error fetching images', e);
        }
    }

    return (
        <div>
            <SideBarComponent />

            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className="cats-feed">
                {
                    images && images.map(image => (
                        <Grid item key={image.id}>
                            <Image data={image} key={image.id} />
                        </Grid>
                    ))
                }
            </Grid>

            <Box textAlign={'center'} mt={2} className="center">
                {loading && <CircularProgress />}
                {!loading && (
                    <Button variant="contained" onClick={handleLoadMore}>More Kitties</Button>
                )}
            </Box>
        </div>
    )
}
export default AllCats;

/*
{!loading && (
    <div className="center">
        <Button variant="contained">More Kitties</Button>
    </div>
)}

{loading && (
    <Box textAlign={'center'}>
        <CircularProgress />
    </Box>
)}
*/