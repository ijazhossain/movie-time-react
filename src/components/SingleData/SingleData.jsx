import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleData = (props) => {
    const { poster, movieName, description, watchTime, imdbRating } = props.singleData;
    // console.log(poster, movieName, description, watchTime, imdbRating)
    return (
        <div className='col-6'>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={poster} />
                <Card.Body className='text-center py-4'>
                    <Card.Title>{movieName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className='d-flex justify-content-between my-4 py-2'>
                        <p>Watch time: {watchTime}</p>
                        <p>Idmb Rating: {imdbRating}</p>
                    </div>
                    <Button onClick={() => props.handleBookNow(watchTime)} className='w-100' variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleData;