
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomePage() {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full ">

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={true}
          showIndicators={false}//oculta los puntos indicadores de la fotografía
          
        >
          <div>
            <img
              src="/src/images/flower.jpg"
              alt="Slide 1"
              className="w-full object-cover"
              
            />
          </div>
          <div>
            <img
              src="/src/images/parpado.jpg"
              alt="Slide 2"
              className="w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/src/images/flower.jpg"
              alt="Slide 3"
              className="w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/src/images/parpado.jpg"
              alt="Slide 4"
              className="w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/src/images/flower.jpg"
              alt="Slide 5"
              className="w-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
