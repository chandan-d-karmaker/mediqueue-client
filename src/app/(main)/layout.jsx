import React from 'react';


const Mainlayout = ({ children }) => {
    return (
        <div>
            {/* <Navbar /> */}

            <main className='my-20 mx-4'>
                {children}
            </main>
            
            {/* <Footer/> */}
        </div>
    );
};

export default Mainlayout;