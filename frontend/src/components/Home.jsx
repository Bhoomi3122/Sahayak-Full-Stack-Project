import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import violence from '../images/violence.png';
import rape2 from '../images/rape-2.png';
import safety from '../images/women_safety.png';
import empowerment from '../images/empowerment.png'

const Home = () => {
  return (
    <div className="home-container" id='home'>
      {/* Impactful Message */}
      

      {/* Carousel */}
      <div className="carousel-container">
        <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={rape2}
              alt="Third slide"
            />
          </Carousel.Item>
          
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={empowerment}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={safety}
              alt="Fourth slide"
            />
          </Carousel.Item>
          

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={violence}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="message-section">
        <h1 className='roboto-slab-font message-head'>Beti Bachegi, Tabhi To Beti Padhegi</h1>
        <p className='kay-pho-du-regular message-para'>Don't ignore. Support women security.</p>
      </div>
      <div className="cards-section">
      <div className="card bg1">
  <h4>Share Your Concerns</h4>
  <p className='card-para'>
    You can create posts about any safety issues you face. Whether it's about changes needed in specific areas or concerns about places, your voice matters. Share your experiences and get your issues addressed and resolved effectively.
  </p>
</div>
<div className="card bg2">
  <h4>Explore Blogs</h4>
  <p className='card-para'>
    Discover insightful blogs on women’s safety and empowerment. You can share your own stories and experiences to inspire others. Your perspective is important—help contribute to the ongoing conversation about safety.
  </p>
</div>
<div className="card bg3">
  <h4>Browse Public Posts</h4>
  <p className='card-para'>
    View posts shared by others, with posts filtered by location for local insights. Easily identify whether a post is marked as solved or unsolved, with visible tags to indicate the post's status and progress.
  </p>
</div>
<div className="card bg4">
  <h4>Access Helplines</h4>
  <p className='card-para'>
    Find all essential helpline numbers for various concerns, all in one place. Reach out for help when needed and get your queries resolved quickly and efficiently, with reliable and accessible resources.
  </p>
</div>

      </div>
    </div>
  );
};

export default Home;
