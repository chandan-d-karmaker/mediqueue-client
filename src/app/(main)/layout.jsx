import React from 'react';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';


const Mainlayout = ({ children }) => {
    return (
        <div>
            <NavBar />

            <main className='my-20 space-y-10 md:w-4/5 md:mx-auto mx-4'>
                {children}
            </main>
            
            <Footer/>
        </div>
    );
};

export default Mainlayout;