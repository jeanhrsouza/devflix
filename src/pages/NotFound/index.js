import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import Main from './style';
import { Link } from 'react-router-dom';



function NotFound() {
    return (
        <>
            <Menu />
                <Main>
                    <Link to="/">
                        Página inicial
                    </Link>

                    
                </Main>
            <Footer />
        </>
    );
}


export default NotFound;