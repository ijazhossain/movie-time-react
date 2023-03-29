import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart';
import SingleData from '../SingleData/SingleData';

const Home = () => {
    const [data, setData] = useState([])
    const [watchTime, setWatchTime] = useState(0)

    const handleBookNow = (time) => {
        console.log(typeof time)
        const duration = JSON.parse(localStorage.getItem('watch-time'))
        // console.log(typeof duration);
        if (duration) {
            const sum = duration + time;
            localStorage.setItem('watch-time', sum)
            setWatchTime(sum)
        } else {
            localStorage.setItem('watch-time', time)
        }
    }

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('data.json')
            const data = await res.json()
            setData(data)
            // console.log(data)
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
                            handleBookNow={handleBookNow}

                        ></SingleData>)
                    }
                </div>

            </div>
            <div className='col-4'>
                <SideCart
                    watchTime={watchTime}
                ></SideCart>
            </div>
        </div>
    );
};

export default Home;