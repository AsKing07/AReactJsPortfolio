import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { github, linkedin, whatsapp, fb } from "../assets/img/social";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://github.com/AsKing07"><img src={github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/charbel-sonon-1a121223b/"><img src={linkedin} alt="" /></a>
                <a href="https://api.whatsapp.com/send?phone=22965861948&text=Hello%20Charbel,%20%20I%20was%20impressed%20by%20your%20portfolio%20and%20the%20range%20of%20skills%20you%20possess.%20I'm%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%20Please%20let%20me%20know%20when%20you're%20available%20for%20a%20conversation.%20%20Best%20regards,"><img src={whatsapp} alt="Whatsapp" /></a>
                <a href="https://www.facebook.com/charbel.Asking"><img src={fb} alt="Facebook" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
