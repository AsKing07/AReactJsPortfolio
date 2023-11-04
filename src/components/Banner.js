import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import TextShpere from "./TextSphere";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Software Engineer", "UI/UX Designer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Row>
      <Col xs={12} md={{span:4, offset:6}} xl={5}>
        <TrackVisibility>
            {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{display:"flex" }}>
                  <img src={headerImg} alt="Header Img" style={{height:"300px"}}/>
          </div>}
        </TrackVisibility>
      </Col>
      </Row>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Charbel`} </h1> <h2><span className="txt-rotate" dataPeriod="800" data-rotate='[ "Web Developer", "Software Engineer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h2> 
                  <p>
                  Passionate about computer science, I'm a junior Software Engineering student with experience in Python, C++, and JavaScript.
                  I also have expertise in beginner-level frameworks like React, Node.js, and Qt. As a fast learner, I enjoy collaborating closely
                  with clients to develop efficient, scalable, and user-friendly solutions that tackle real-world challenges.
                  I am a team player and I am excited to work with others to create amazing applications.
                  </p>
                  <a href="#connect" style={{textDecoration:'none'}}> <button>Let’s Connect <ArrowRightCircle size={25} /></button></a>
                 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <TextShpere />
                </div>}
            </TrackVisibility>
          </Col>
          {/* <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                 <TextShpere />
                </div>}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
    </section>
  )
}
