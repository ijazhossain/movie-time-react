import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart';
import SingleData from '../SingleData/SingleData';

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('data.json')
            const data = await res.json()
            setData(data)
            console.log(data)
        }
        loadData()
    }, [])
    return (
        <div className='container mx-auto row py-5'>
            <div className='col-8'>

                <div className='row gy-4'>
                    {
                        data.map(singleData => <SingleData
                            key={singleData.movieName}
                            singleData={singleData}
                        ></SingleData>)
                    }
                </div>

            </div>
            <div className='col-4'>
                <SideCart></SideCart>
            </div>
        </div>
    );
};

export default Home;