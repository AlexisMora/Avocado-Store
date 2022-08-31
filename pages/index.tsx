import React from "react"
import ProductList from '@components/ProductList/ProductList'
import { GetStaticProps } from "next"


export const getStaticProps: GetStaticProps = async () => {
  // TODO: Change this url
  const url = "http://localhost:3000/"
  const response = await fetch(`${url}api/avo`)
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: {productList: TProduct[]}) => {

  return (
      <>
         <ProductList products={productList} />
      </>
  )
}

export default HomePage

