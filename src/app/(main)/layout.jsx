import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/footer';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar />

            <main className='my-20 mx-4'>
                {children}
            </main>
            
            <Footer/>
        </div>
    );
};

export default Mainlayout;