
import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/Testimonials/Testimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const navigate = useNavigate();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Automatically slides every 3 seconds
    responsive: [
      {
        breakpoint: 768, // For tablets and mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const sliderContent = [
    {
      title: "Welcome to our E-Learning Platform",
      description: "Learn, Grow, Excel",
   
    },
    {
      title: "Welcome to our E-Learning Platform",
      description: "Learn, Grow, Excel",
      
    },
    {
      title: "Welcome to our E-Learning Platform",
      description: "Learn, Grow, Excel",
    },
  ];

  return (
    <div>
      {/* Carousel Slider */}
      <div className="home">
        <Slider {...settings}>
          {sliderContent.map((slide, index) => (
            <div key={index} className="slider-item">
              <div className="slider-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button
                  onClick={() => {
                    navigate("/courses");
                  }}
                  className="common-btn"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}






// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './home.css';
// import Testimonials from '../../components/Testimonials/Testimonials';

// export default function Home() {
//     const navigate = useNavigate();
//   return (
//     <div>
//       <div className="home">
//         <div className="home-content">
//             <h1>Welcome to our E-Learning Platform</h1>
//             <p>Learn,Grow,Excel</p>
//             <button onClick={()=>{navigate("/courses")}} className='common-btn'>Get started</button>
//         </div>
//       </div>
//       <Testimonials/>

//     </div>
//   )
// }

