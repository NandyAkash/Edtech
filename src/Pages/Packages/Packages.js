import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css';
const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://bloodcurdling-chupacabra-21156.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data => setPackages(data))
    })

    return (
        <div>
            <Container>
            <h1 className="mt-4 mb-4">Our Exclusive Courses</h1>
            <div className="packages-container">
            {
                packages.map(offer => <Package 
                    key={offer._id} 
                    data={offer}
                   ></Package>)
            }
            </div>
          
            </Container>
        </div>
    );
};

export default Packages;