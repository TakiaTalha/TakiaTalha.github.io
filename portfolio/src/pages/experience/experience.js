import React from 'react'; 
import './experience.css'; // Link to the CSS file

function Experience() {
  return (
    <div className="experience-container">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="experience-item">
        <div className="experience-header">
          <h3>Software Analyst Intern, Hitachi Rail</h3>
          <p className="date">May 2024 - Present</p>
        </div>
        <ul>
        <li>Contributing to the optimization of the Automatic Train Supervision (ATS) system to improve railway travel time and operational efficiency</li>
        <li>Performed data cleaning, analysis, and feature engineering on large-scale operational datasets extracted from XML files and internal databases</li>
        <li>Developed a baseline machine learning model to analyze and predict travel time</li>
        <li>Currently implementing a graph-based representation of train network data using <strong>Structural Deep Network Embedding (SDNE)</strong> for enhanced system modeling</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <h3>Software Developer Intern, The Hospital for Sick Children</h3>
          <p className="date">Jan 2025 - Apr 2024</p>
        </div>
        <ul>
          <li>Worked in a team to build a website using Next.js and FastAPI for their researchers to analysis data features, track and monitor participant data</li>
          <li>Developed an algorithm to process daily sensor data from participants and automatically determine hours of wear</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <h3>ML Developer, The Linux Foundation</h3>
          <p className="date">Jan 2024 - Apr 2024</p>
        </div>
        <ul>
          <li>Developed a Personal AI Tutor that guides a student and surface the next best possible course of action/module/material that the student should know to learn ML/AI concepts</li>
          <li>Worked on developing on a Graph RAG model that will collaborate with a DAG structured database to provide content to the chatbot.</li>
          <li>Devised a chatbot by finetuning a pre-existing LLM and creating the surface for the chatbot using React/Next.js</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <h3>Teaching Assistant, University of Toronto</h3>
          <p className="date">Sep 2024 - Present</p>
        </div>
        <ul>
          <li>Holding weekly office hours and tutoring sessions to help students understand complex topics</li>
          <li>Grading assignments, exams and ensuring timely feedback and accurate assessment</li>
          <li>Assisting the professor in developing course materials, quizzes, and tutorial exercises, improving student engagement</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <h3>ML Developer, U of T Machine Intelligence Student Team</h3>
          <p className="date">Sep 2023 - Aug 2024</p>
        </div>
        <ul>
          <li>Implemented One-vs-Rest and Binary Relevance SVM and ensembled them with Naive Bayes to solve a Hierarchical Multi-Label Classification problem</li>
          <li>Collected and preprocessed raw data to feed into the models by performing tasks such as cleaning, normalizing, and feature engineering</li>
          <li>Collaborated using GIT & Notion, learning effective design & communication skills for large-scale ML development projects</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Website Manager, UTM MSA</h3>
          <p className="date">Sep 2023 - Apr 2024</p>
        </div>
        <ul>
          <li>Managed the website of the MSA using HTML, CSS, and JavaScript</li>
          <li>Collaborated with the executive team to ensure the website was up to date with the latest events and information</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;