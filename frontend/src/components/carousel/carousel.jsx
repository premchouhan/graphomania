import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    
    <Carousel>
      <Carousel.Item>
        
        <img height="450"
          className="d-block w-100"
          src="https://images.wallpaperscraft.com/image/single/jeep_travel_slope_177152_3840x2400.jpg"
          alt="TRAVEL"
        />
        <Carousel.Caption>
          <h3>TRAVEL</h3>
          <p>“Remember that happiness is a way of travel, not a destination.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="450"
          className="d-block w-100"
          src="https://images.wallpaperscraft.com/image/single/dj_music_disco_160929_300x168.jpg"
          alt="MUSIC"
        />
        <Carousel.Caption>
          <h3>MUSIC</h3>
          <p>“Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.”.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="450"
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/443/406/532/5c1c925cd8929-wallpaper-preview.jpg"
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
        <img height="450"
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
          alt="NATURE"
        />

        
        <Carousel.Caption>
          <h3>NATURE</h3>
          <p>“Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="450"
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg?size=626&ext=jpg&ga=GA1.2.752981734.1678030506&semt=ais"
          alt="CINEMA"
        />
        <Carousel.Caption>
          <h3>CINEMA</h3>
          <p>"Cinema is an art form, a result of dedication of a number of people."</p>
    
        </Carousel.Caption>
    
      </Carousel.Item>
    
    </Carousel>
   
  );
}
export default UncontrolledExample;