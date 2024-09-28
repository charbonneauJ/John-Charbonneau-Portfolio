import React from "react";
import PCards from "../components/Cards";
import placeholder from "../images/react.svg";




const projects = [
  {
    title: "Project 1",
    img: placeholder,
    link: "https://www.google.com",
    git: "https://www.github.com",
    width: "25rem",
  },
  {
    title: "Project 2",
    img: placeholder,
    link: "https://www.google.com",
    git: "https://www.github.com",
    width: "18rem",
  },
  {
    title: "Project 3",
    img: placeholder,
    link: "https://www.google.com",
    git: "https://www.github.com",
    width: "18rem",
  },
  {
    title: "Project 4",
    img: placeholder,
    link: "https://www.google.com",
    git: "https://www.github.com",
    width: "18rem",
  },
  {
    title: "Project 5",
    img: placeholder,
    link: "https://www.google.com",
    git: "https://www.github.com",
    width: "18rem",
  },
  {
    title: "Project 6",
    img: placeholder,
    link: "https://www.google.com",
    git: "https://www.github.com",
    width: "18rem",
  },
];

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
        <PCards
          key={index}
          img={project.img}
          title={project.title}
          link={project.link}
          git={project.git}
          width={project.width}
        />
      ))}
    </>
  );
}
