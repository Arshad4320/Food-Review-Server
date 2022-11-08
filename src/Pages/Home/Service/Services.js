import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Services = ({ service }) => {
    console.log(service);
    const { img, price } = service;
    return (
        <Card style={{}}>
            <Card.Img variant="top" className='w-100' src={img} />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Services;