import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projet1, projet2, projet3, projet4, projet5, projet6 } from "../assets/img/projects";
import { projet7, projet9, projet10, projet11, projet12, projet13, projet14 } from "../assets/img/projects";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects1 = [
    {
      title: "Task Manager",
      description: "Design & Development: This project is a basic FullStack task manager. It is designed to help you organize and track your tasks efficiently and was created within a learning context.",
      imgUrl: projet1,
      demo:'https://taskmanager-asking.vercel.app/',
      code:'https://github.com/AsKing07/TaskManager-FullStackWebApp-GestionnairedeTaches-ApplicationFullStack'
    },
    {
      title: "React Native Job-Search App",
      description: "A simple react_native basic app of Job search",
      imgUrl: projet2,
      demo:'#projects',
      code:'https://github.com/AsKing07/react_native_jobs_search_app'
    },
    {
      title: "PromptoShare",
      description: "Create creative prompts and share with the world.",
      imgUrl: projet3,
      demo:"https://promptoshare.vercel.app/",
      code:'https://github.com/AsKing07/PromptoShare_Project'
    },
    {
      title: "Product Manager: Java+SpringBoot",
      description: "Projet 'Gestion de Produit' réalisé avec Java Spring Boot. Ce projet a pour objectif de fournir une application de gestion de produits avec les opérations CRUD (Create, Read, Update, Delete).",
      imgUrl: projet4,
      demo:'#projects',
      code:'https://github.com/AsKing07/Java-SpringBoot-Gestion-de-produits'
    },
    {
      title: "Gestion de Competences en-C++ avec Qt-Projet-Graphique",
      description: "Il s'agit d'une application qt graphique de gestion de compétences. La version évolutive de la version console proposée précédemment",
      imgUrl: projet5,
      demo:'#projects',
      code: "https://github.com/AsKing07/Gestion-de-Competences-en-C-avec-Qt---Projet-Graphique"
    },
    {
      title: "Basic ECommerce-FullStack-App",
      description: "A simple FullStack ECommerce App with basic functionality",
      imgUrl: projet6,
      demo:"https://ecom-asing.vercel.app/products",
      code:'https://github.com/AsKing07/ECommerce-FullStack-App/tree/main'
    },

  ];
  const projects2 = [
    {
      title: "DollarsToCents",
      description: "Program to convert dollar to cents with the cents of: Quarters (25 ¢) Dimes (10 ¢) Nickels (5 ¢) Pennies (1 ¢)",
      imgUrl: projet7,
      demo:'https://asking07.github.io/DollarsToCents/',
      code:'https://github.com/AsKing07/DollarsToCents/tree/main'
    },
    {
      title: "AI Summarizer",
      description: "AI Summarizer est une application web qui utilise l'API Chat GPT-4 via RapidAPI pour résumer des textes en langues différentes. Cette application a été développée en utilisant Vite.js et React, avec la mise en page et les styles gérés grâce à Tailwind CSS.",
      imgUrl: projet14,
      demo:'https://github.com/AsKing07/ai_summarizer',
      code:'https://github.com/AsKing07/Convertisseur'
    },
    {
      title: "Calculator",
      description: "Une calculatrice intéractive réalisée avec HTML CSS et JavaScrip",
      imgUrl: projet9,
      demo:"https://asking07.github.io/Calculator/",
      code:'https://github.com/AsKing07/Calculator'
    },
    {
      title: "Cars Showcase",
      description: "This GitHub repository contains a Cars Showcase web project developed using React, NextJS 13, Typescript, and Tailwind CSS. The website aims to provide an immersive experience for users interested in exploring various car models.",
      imgUrl: projet10,
      demo:'https://cars-showcase-asking07.vercel.app/',
      code:'https://github.com/AsKing07/cars_showcase'
    },
    {
      title: "Border-Radius-Previewer",
      description: "A simple border radius effect previwer",
      imgUrl: projet11,
      demo:'https://asking07.github.io/Border-Radius-Previewer/',
      code: "https://github.com/AsKing07/Border-Radius-Previewer"
    },
    {
      title: "AppJS-SpeedType",
      description: "Il s'agit d'un projet web en JavaScript pour améliorer la saisie au clavier, appelé 'SpeedType'. L'application permet à l'utilisateur de s'entraîner à taper rapidement en affichant des mots ou des phrases et en calculant le score en fonction du temps de saisie.",
      imgUrl: projet13,
      demo:"https://asking07.github.io/AppJS-SpeedType/",
      code:'https://github.com/AsKing07/AppJS-SpeedType/tree/main'
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>

                <p>
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">

                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                    <Nav.Item>
                      <Nav.Link eventKey="first">Section 1</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second">Section 2</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="third">Section 3</Nav.Link>
                    </Nav.Item>

                  </Nav>

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project1, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <p>Empty content for the moment.</p>
                      <p>More projects on my  <a href="github.com/AsKing07"><Button variant="light">GitHub Profile</Button></a>   </p>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
