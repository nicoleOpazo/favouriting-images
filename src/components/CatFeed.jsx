import { Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "./Image";

const Feed = () => {
    const [images, setImages] = useState([]);
    const [showBreedOnly, setShowBreedOnly] = useState(false);

    async function refreshImages() {
        setImages([])

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12', {
                headers: {
                    "content-type": "application/json",
                    'x-api-key': process.env.REACT_APP_CAT_API_KEY
                }
            });
            const json = await response.json();
            setImages(json);
        }
        catch (e) {
            console.error('Error fetching images', e);
        }
    }

    useEffect(() => {
        refreshImages();
    }, [])

    const toggleBreedFilter = async () => {
        setShowBreedOnly(!showBreedOnly);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1', {
                headers: {
                    "content-type": "application/json",
                    'x-api-key': process.env.REACT_APP_CAT_API_KEY
                }
            });
            const json = await response.json();
            setImages(json);
        }
        catch (e) {
            console.error('Error fetching images', e);
        }
    };

    const filteredImages = showBreedOnly
        ? images.filter(image => image.breeds.length > 0)
        : images;

    return (
        <div>
            <Button onClick={toggleBreedFilter}>
                {showBreedOnly ? "All Cats" : "Breed Cats"}
            </Button>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className="cats-feed">
                {
                    images && images.map(image => (
                        <Image data={image} key={image.id} />
                    ))
                }
            </Grid>
        </div>
    );
}

export default Feed;