import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import ProductDetail from '@components/ProductDetail/ProductDetail'

// TODO: change this url
const url = 'http://localhost:3000/'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${url}api/avo`)
  const { data }: TAPIAvoResponse = await response.json()

  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${url}api/avo/${params?.id}`)
  const product = await response.json()
  return { props: { product } }
}
const ProductPage = ({ product }: {product: TProduct}) => {
  return (
    <>
      {product && <ProductDetail product={product} />}
    </>
  )
}

export default ProductPage
