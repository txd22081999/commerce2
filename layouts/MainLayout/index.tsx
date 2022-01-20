import Footer from 'components/Footer'
import Header from 'components/Header'
import React, { FC } from 'react'

const MainLayout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
