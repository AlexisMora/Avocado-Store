import React from 'react'
import Navbar from '@components/Navbar/Navbar'

type Props = {
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <footer>this is the footer</footer>
    </div>
  )
}

export default Layout