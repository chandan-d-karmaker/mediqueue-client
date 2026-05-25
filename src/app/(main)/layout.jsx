import React from 'react';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';


const Mainlayout = ({ children }) => {
    return (
        <div>
            <NavBar />

            <main>
                {children}
            </main>
            
            <Footer/>
        </div>
    );
};

export default Mainlayout;