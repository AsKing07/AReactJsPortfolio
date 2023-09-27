import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Knob } from 'primereact/knob';
import { cpp,css,git,html,js,mongodb,mysql,nodejs,python,qt,react,vue,wordPress,canvas, express, twcss  } from '../assets/img/tech';
import { Image } from 'react-bootstrap';
const skillsData = [
  {
    name: "GIT",
    value: 60,
    imageName: git
  },
  {
    name: "HTML",
    value: 75,
    imageName: html
  },
  {
    name: "CSS",
    value: 50, 
    imageName:css
  },
  {
    name: "JavaScript",
    value: 60,
    imageName:js
  },
  {
    name: "React",
    value: 40,
    imageName :react,
  },
  {
    name: "Vue",
    value: 45,
    imageName : vue,
  },
  {
    name: "TailwindCss",
    value: 20,
    imageName : twcss,
  },
  {
    name: "Node.js",
    value: 40, 
    imageName: nodejs,
  },
  {
    name: "Express",
    value: 35, 
    imageName:express
  },
  {
    name: "Mongo DB",
    value: 40, 
    imageName: mongodb,
  },
  {
    name: "MySQL",
    value: 40, 
    imageName: mysql,
  },
  {
    name: "WordPress",
    value: 70,
    imageName: wordPress,
  },
  {
    name: "Python",
    value: 50, 
    imageName:python,
  },
  {
    name: "C++",
    value: 45,
    imageName:cpp,
  },
  {
    name: "Qt",
    value: 55, 
    imageName:qt,
  },
  {
    name: "Canvas",
    value: 80, 
    imageName:canvas
  },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Discover my diverse skills in web development, software, and UI/UX design, acquired with passion and dedication.                <br />
                Explore how I can contribute to your project.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <Knob
                      value={skill.value}
                      valueColor="purple"
                      rangeColor="white"
                      textColor="white"
                      size={180}
                      readOnly
                    />
                    <h5>{skill.name}</h5>
                    <Image
  src={skill.imageName}
  alt={skill.name}
/>

                  </div>
                ))}
              </Carousel>

              <div className="download-button">
                <a
                  href="/chemin-vers-votre-cv.pdf"
                  download="votre-cv.pdf"
                  className="btn btn-light "
                  
                >
                  Download CV
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Imager" />
    </section>
  );
};


