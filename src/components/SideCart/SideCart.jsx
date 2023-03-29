import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from 'react-bootstrap';

const SideCart = ({ watchTime }) => {
    const [time, setTime] = useState()
    const [breakTime, setBreakTime] = useState()
    const handleBreak = (time) => {
        setBreakTime(time);
    }

    useEffect(() => {
        const timeValue = JSON.parse(localStorage.getItem('watch-time'));
        setTime(timeValue)
    }, [watchTime])
    return (
        <div className='text-center border  py-5 px-3 rounded'>
            <h1>My Cart</h1>
            <div>
                <h3>Total watch Time</h3>
                <input className='form-control' type="text" defaultValue={time} />
            </div>
            <div className='my-5'>
                <h3 className='mb-4'>Add Break Time</h3>
                <button onClick={() => handleBreak(15)} type="button" className="btn btn-danger ms-3 px-4">15</button>
                <button onClick={() => handleBreak(20)} type="button" className="btn btn-warning ms-3 px-4">20</button>
                <button onClick={() => handleBreak(25)} type="button" className="btn btn-info ms-3 px-4">25</button>
                <input type="text" className="form-control mt-3 " defaultValue={breakTime} />
                <Button onClick={() => toast("Wow so easy!")} className='w-100 mt-4' variant="info">Complete</Button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default SideCart;