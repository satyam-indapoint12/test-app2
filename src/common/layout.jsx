import React from 'react'
import Header from './header'
import Footer from './footer'
import Panel from './panel'


const Layout = ({children}) => {

    return <div className='main'>
        <Header />
            <Panel />
            {children}
        <Footer />
    </div>
}

export default Layout