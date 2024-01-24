import React, { PropsWithChildren } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    
      {children}
    
    <Footer />
  </>
)

export default Layout