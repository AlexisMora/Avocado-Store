import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { useRouter } from 'next/router'

type props = {
  product : TProduct
}

const ProductCard = ({ product: { name, id, price, image, attributes } }:props) => {
  const router = useRouter()
  const handleDetailRedirect = () => {
    router.push(`/product/${id}`)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
          onClick={() => handleDetailRedirect()}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Price:</strong> <span>{price}€</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{ textTransform: 'none' }} size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
