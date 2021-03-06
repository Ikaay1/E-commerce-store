import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product, handleAddToCart }) => {

    const classes = useStyles()


  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" componene="h2">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" componene="h2">
                    {product.price.formatted_with_symbol}
                </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" componene="p" />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(product.id, 1)}>
            <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product