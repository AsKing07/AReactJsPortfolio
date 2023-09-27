import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, description, imgUrl, demo, code }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title}  style={{objectFit:"cover"}} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent:'space-around' , marginTop: 'auto' }}>
          <a href={demo}  rel="noopener noreferrer">
            <Button variant="outline-light"  onClick={() =>{if(demo==="#projects"){alert("Pas de démo pour ce projet")}}}>Demo</Button>
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer">
            <Button variant="outline-light">Code</Button>
          </a>
          
        </div>
      </div>
    </Col>
  );
}
