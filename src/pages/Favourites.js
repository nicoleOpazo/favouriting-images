import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SideBarComponent, Image } from "../components";

const FavouritesCats = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    async function onImageUnfavourited(favouriteId) {
        try {
            await fetch(`https://api.thecatapi.com/v1/favourites/${favouriteId}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json",
                    'x-api-key': process.env.REACT_APP_CAT_API_KEY
                }
            });

            setImages(prevImages => prevImages.filter(image => image.favourite.id !== favouriteId));
        } catch (error) {
            console.error('Error al eliminar la imagen favorita:', error);
        }
    }

    async function refreshImages() {
        setImages([]);
        setLoading(true);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/favourites?order=DESC', {
                headers: {
                    "content-type": "application/json",
                    'x-api-key': process.env.REACT_APP_CAT_API_KEY
                }
            });
            const json = await response.json();

            const mapped = json.map(favourite => {
                return {
                    id: favourite.image.id,
                    url: favourite.image.url,
                    favourite,
                    breeds: []
                };
            });

            setImages(mapped);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshImages();
    }, []);

    return (
        <div>
            <SideBarComponent />
            {images.length === 0 ? (
                <Box textAlign="center" mt={4}>
                    <Typography variant="h6">No hay imágenes favoritas aún.</Typography>
                </Box>
            ) : (
                <>
                    {loading ? (
                        <Box textAlign="center" mt={4}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className='cats-feed'>
                            {images.map(image => (
                                <Grid item key={image.id}>
                                    <Image data={image} key={image.id} onUnFavourite={onImageUnfavourited} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </>
            )}
        </div>
    );
}
export default FavouritesCats;