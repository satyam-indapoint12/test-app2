import React from 'react'
import Header from './header'
import Footer from './footer'
import Panel from './panel'
import HelmetTags from './helmet-tags'


const Layout = ({children}) => {

    return <div className='main'>
        <HelmetTags />
        <Header />
            <Panel />
            {children}
        <Footer />
    </div>
}

export default Layout