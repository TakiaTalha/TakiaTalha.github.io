import React from 'react';
import Card from '../../components/card/card.js'; // Adjust the path based on your folder structure
import './project.css';
const Projects = () => {
  const currentWorks = [
    {
      image: './tutor.gif',
      title: 'Personal AI Tutor',
      description: 'Currently working on developing a smart tutor that will be able to guide a student and surface the next best possible course of action/module/material that the student should know to learn ML/AI concepts',
      link: 'https://github.com/chloe-nguyenminh/csc413_project',
    },
  ];

  const pastProjects = [
       {
        image: './math.gif',
        title: 'Math-BERT-T5 Hybrid Model',
        description: 'Developed a hybrid MathBERT-T5 model capable of advanced mathematical reasoning tasks',
        link: 'https://github.com/chloe-nguyenminh/csc413_project',
      },
      {
        image: '/ML.gif',
        title: 'NucleAIse',
        description: 'A machine learning model that predicts protein function from protein sequences',
        link: 'https://github.com/ambroseling/NucleAIse',
      },
      {
      image: './secure_city.gif',
      title: 'Secure City',
      description:
        'A front-end interface for urban crime challenges with React and crime data visualization',
      link: 'https://github.com/TakiaTalha/Secure-City_DeerHacks2024',
    },
    {
      image: '/giphy.gif',
      title: 'Adventure Game',
      description: 'An adventure game using Java and JavaFX',
      link: 'https://github.com/TakiaTalha/Adventure-Game',
    },
    {
      image: './ig.gif',
      title: 'iGraphics Project',
      description: 'A game written in C and C++',
      link: 'https://github.com/ananyapromi3/iGraphics-project',
    },
    {
      image: './sokoban.gif',
      title: 'Sokoban',
      description: 'The classic Sokoban written in Assembly',
      link: 'https://github.com/your-repo/sokoban',
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">CURRENT WORKS</h1>
      <div className="projects-grid">
        {currentWorks.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <h1 className="projects-title">PAST PROJECTS</h1>
      <div className="projects-grid">
        {pastProjects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;