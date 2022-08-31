import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@components/ProductCard.tsx/ProductCard'

type ProductListProps = {
  products: TProduct[]
}

const ProductList = ({ products}: ProductListProps) => {
  return (
    <div>
      {
        products.map((product: TProduct) => (
          <ProductCard product={product} />
        ))
      }
    </div>
  )
}

export default ProductList