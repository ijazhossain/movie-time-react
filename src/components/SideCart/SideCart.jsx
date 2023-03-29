import React from 'react';
import { Button } from 'react-bootstrap';

const SideCart = () => {
    return (
        <div className='text-center border  py-5 px-3 rounded'>
            <h1>My Cart</h1>
            <div>
                <h3>Total watch Time</h3>
                <input className='form-control' type="text" value='100' />
            </div>
            <div className='my-5'>
                <h3 className='mb-4'>Add Break Time</h3>
                <button type="button" class="btn btn-danger ms-3 px-4">15</button>
                <button type="button" class="btn btn-warning ms-3 px-4">20</button>
                <button type="button" class="btn btn-info ms-3 px-4">25</button>
                <input type="text" className="form-control mt-3 " value='15' />
                <Button className='w-100 mt-4' variant="info">Complete</Button>
            </div>
        </div>
    );
};

export default SideCart;