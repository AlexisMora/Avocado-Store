import React, { FC } from 'react'

interface Props{
  product: TProduct
}

const ProductDetail: FC<Props> = ({ product }) => {
  return (
    <div>{product.name}</div>
  )
}

export default ProductDetail
