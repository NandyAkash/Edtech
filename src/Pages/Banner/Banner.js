import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel-container">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src="https://www.simplilearn.com/ice9/webinar_thum_image/CPP_Tutorial.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>C++</h3>
                    <p>Learn Object oriented programming with C++. Discount 20%</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src="https://www.softzone.es/app/uploads-softzone.es/2020/09/Programar-Java.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Java</h3>
                    <p>Learn Android Programmming with Java.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src="https://www.filepicker.io/api/file/BFMMlbcQvml9HSqXcvNp"
                    alt="Python"
                    />

                    <Carousel.Caption>
                    <h3>Python</h3>
                    <p>A language of beauty for Data Engineers.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;