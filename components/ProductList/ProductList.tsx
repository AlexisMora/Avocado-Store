import React from 'react'
import ProductCard from '@components/ProductCard.tsx/ProductCard'
import { Grid } from '@mui/material'

type ProductListProps = {
  products: TProduct[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Grid
    container
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vw' }}
    xs={12}
    spacing={2}
    >
      {
        products.map((product: TProduct) => (
          <Grid key={product.id} xs={5}>
            <ProductCard product={product} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default ProductList
