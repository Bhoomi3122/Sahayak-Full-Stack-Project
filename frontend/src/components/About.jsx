import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const paragraphRefs = useRef([]);  // Initialize the reference array

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Add 'animate' class when element is in view
      }
    });
  };

  useEffect(() => {
    const options = {
      threshold: 0.1, // Trigger animation when 10% of element is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe paragraphs only if they exist
    paragraphRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      // Clean up observer when component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-background" id="about">
      <div className="about-container">
        <div className="about-content">
          <h1 className="bree-serif-regular">ABOUT US</h1>
          <p
            className="para-1"
            ref={(el) => paragraphRefs.current[0] = el} // Assign the reference to index 0
          >
            Sahayak is a dedicated platform designed specifically for enhancing women’s security in today's fast-paced world. It serves as a crucial tool that allows women to voice their concerns and report any issues they face regarding their safety. By facilitating open communication and providing necessary resources, Sahayak aims to create a community where women feel safe and empowered.
          </p>
          <p
            className="para-2"
            ref={(el) => paragraphRefs.current[1] = el} // Assign the reference to index 1
          >
            The creation of Sahayak is a response to the growing concern surrounding women’s safety in various environments. With reports of harassment and violence against women on the rise, there is an urgent need for a solution that addresses these issues head-on. This platform aims to tackle the root causes of insecurity and help create a safer society for women.
          </p>
          <p
            className="para-3"
            ref={(el) => paragraphRefs.current[2] = el} // Assign the reference to index 2
          >
            The mission of Sahayak is to cultivate a better world where women can live freely without the constant fear of insecurity. Through advocacy and awareness, Sahayak aims to challenge societal norms that contribute to the culture of silence surrounding women's safety.
          </p>
          <p
            className="para-4"
            ref={(el) => paragraphRefs.current[3] = el} // Assign the reference to index 3
          >
            Sahayak provides women with a unique platform to raise their voices and have their concerns addressed. By allowing users to share their experiences, the platform helps create a comprehensive understanding of the challenges women face.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
