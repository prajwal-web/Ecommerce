import React from 'react'

type TProductCardContainer = {
    children: React.ReactNode
}

const ProductCardContainer = ({children}: TProductCardContainer) => {
  return (
    <>
        {children}
    </>
  )
}

export default ProductCardContainer