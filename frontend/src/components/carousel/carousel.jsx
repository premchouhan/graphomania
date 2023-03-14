import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img height="700"
          className="d-block w-100"
          src="https://wallpapercave.com/dwp1x/wp2003930.jpg"
          alt="TRAVEL"
        />
        <Carousel.Caption>
          <h3>TRAVEL</h3>
          <p>“Remember that happiness is a way of travel, not a destination.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="700"
          className="d-block w-100"
          src="https://images.wallpaperscraft.com/image/single/dj_headphones_installation_122020_300x168.jpg"
          alt="MUSIC"
        />
        <Carousel.Caption>
          <h3>MUSIC</h3>
          <p>“Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="700"
          className="d-block w-100"
          src="https://wallpapershome.com/images/pages/ico_h/17806.jpg"
          alt="FOOD"
        />
        <Carousel.Caption>
          <h3>FOOD</h3>
          <p>
          “Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="700"
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="NATURE"
        />
        <Carousel.Caption>
          <h3>NATURE</h3>
          <p>
          "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="700"
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1627133805103-ce2d34ccdd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNpbmVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="CINEMA"
        />
        <Carousel.Caption>
          <h3>CINEMA</h3>
          <p>
          "Cinema is an art form, a result of dedication of a number of people"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;