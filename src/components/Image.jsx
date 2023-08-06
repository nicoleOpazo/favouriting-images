import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Image({ data, onUnFavourite }) {
  const breed = data.breeds[0] || {}
  const [favourite, setFavourite] = React.useState(data.favourite)

  async function handleFavouriteToggle() {
    const isFavouriting = !favourite;

    if (isFavouriting) {
      var rawBody = JSON.stringify({
        "image_id": data.id
      });

      const response = await fetch(
        "https://api.thecatapi.com/v1/favourites",
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            'x-api-key': process.env.REACT_APP_CAT_API_KEY
          },
          body: rawBody
        }
      );
      const newFavourite = await response.json();
      setFavourite(newFavourite)
    } else {
      const response = await fetch(
        `https://api.thecatapi.com/v1/favourites/${favourite.id}`,
        {
          method: 'DELETE',
          headers: {
            "content-type": "application/json",
            'x-api-key': process.env.REACT_APP_CAT_API_KEY
          }
        }
      );
      onUnFavourite(favourite.id);
      setFavourite(null);
    }
  }

  return (
    <Card sx={{ margin: 1, width: 300, height: 500 }}>
      <CardHeader
        title={breed.name}
      />
      <CardMedia
        component="img"
        height="300"
        image={data.url}
        alt={breed.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {breed.temperament}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleFavouriteToggle} aria-label="add to favorites">
          {favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}