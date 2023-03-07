import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
  
    <Carousel>
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="https://www.jssor.com/premium/ski/img/dreamstime_m_103202288-duotone.jpg"
          alt="First slide"
          width="100" 
          height="400"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jssors8.azureedge.net/demos/image-slider/img/px-bloom-blossom-flora-65219-image.jpg"
          alt="Second slide"
          width="100" 
          height="400"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jssors8.azureedge.net/demos/image-slider/img/px-action-athlete-athletes-848618-image.jpg"
          alt="Third slide"
          width="100" 
          height="400"
        />
  
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
    
  );
}

export default UncontrolledExample;