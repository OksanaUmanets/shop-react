import React from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Slider = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img width={420} height={700}
        className="d-block w-100"
        src="./img/first.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Книги источник знаний</h3>
        <p>Люди перестают мыслить, когда перестают читать</p>
          <Link exact to={'/form'}>
            <Button variant="primary">
              Обратная связь
            </Button>
          </Link>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={420} height={700}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={420} height={700}
        className="d-block w-100"
        src="./img/three.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider