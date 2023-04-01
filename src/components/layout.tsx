import React, { useState, ReactNode  } from 'react';
import Navbar from './nav';
import Footer from './footer';

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Layout = ({ children  } : Props) => {
    return (      
        <div>
            <Navbar />
            <div style={{paddingTop: "5rem"}} >{children}</div>
        </div>
    );
};

export default Layout;
