import React from "react";
import PCards from "../components/Cards";
// import placeholder from "../images/react.svg";
import image1 from "../images/The-MET-Blog.png";
import image2 from "../images/Charizard-vs-a-chimpanzee.png";
import image3 from "../images/The-social-network.png";
import image4 from "../images/The-super-awesome-tech-blog.png";
import image5 from "../images/Horiseon-marketing-cleanup.png";
import image6 from "../images/Ecommerce-demo.png";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// How do I make this dynamic? For all of the images so I don't need to do them one by one?

const projects = [
  {
    title: "The Met Blog",
    img: image1,
    link: "https://dashboard.render.com/",
    git: "https://github.com/charbonneauJ/The-MET-Blog",
    width: "18rem",
  },
  {
    title: "Charizard vs a Chimpanzee",
    img: image2,
    link: "https://charbonneauj.github.io/Charizard-vs-a-chimpanzee/",
    git: "https://github.com/charbonneauJ/Charizard-vs-a-Chimpanzee",
    width: "18rem",
  },
  {
    title: "The Social Network!",
    img: image3,
    link: "https://drive.google.com/file/d/1pZK79EDDAvDVx3mMonEQe1wYDi_6t1d0/view",
    git: "https://github.com/charbonneauJ/The-Social-Network?tab=readme-ov-file",
    width: "18rem",
  },
  {
    title: "The Super Awesome Tech Blog",
    img: image4,
    link: "https://dashboard.render.com/",
    git: "https://github.com/charbonneauJ/Super-Awesome-Tech-Blog",
    width: "18rem",
  },
  {
    title: "Horiseon Marketing Cleanup",
    img: image5,
    link: "https://charbonneauj.github.io/Horiseon-Marketing-Cleanup/",
    git: "https://github.com/charbonneauJ/Horiseon-Marketing-Cleanup",
    width: "18rem",
  },
  {
    title: "Ecommerce Demo",
    img: image6,
    link: "https://dashboard.render.com/",
    git: "https://github.com/charbonneauJ/Ecommerce-Demo",
    width: "18rem",
  },
];

export default function Portfolio() {
  return (
    <>
      <Container>
      <h1>Portfolio</h1>
      <Row>
        {projects.map((project, index) => (
          <Col xs={4}>
            <PCards
              key={index}
              img={project.img}
              title={project.title}
              link={project.link}
              git={project.git}
              width={project.width}
            />
          </Col>
        ))}
      </Row>
      </Container>
    </>
  );
}
