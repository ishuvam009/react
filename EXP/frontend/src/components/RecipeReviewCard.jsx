import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({imageUrls}) {
  console.log('imageUrl:', imageUrls);
  return (
    <>
    <div style={{marginLeft: '20'}}>
      <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        // image="https://images.unsplash.com/photo-1692842134190-d31cb40db1ec"
        image = {imageUrls}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bikini
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A bikini is a two-piece swimsuit primarily worn by girls and women that features one piece on top that covers the breasts, and a second piece on the bottom: the front covering the pelvis but usually exposing the navel, and the back generally covering the intergluteal cleft and some or all of the buttocks. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </div>
    </div>
    </>
  );
}
