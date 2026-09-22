import React from 'react'; 
import './experience.css'; // Link to the CSS file

function Experience() {
  return (
    <div className="experience-container">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="experience-item">
        <div className="experience-header">
          <div className="experience-title">
            <h2>Software Analyst Intern</h2>
            <h3>Hitachi Rail</h3>
          </div>
          <p className="date">May 2025 - Aug 2026</p>
        </div>
        <ul>
        <li>Developed ETL and data processing pipelines for 2M+ ATS operational records, performing data cleaning, exploratory analysis, and
            feature engineering using SQL and statistical techniques (PCA, KneeLocator).</li>
        <li>Performed data cleaning, analysis, and feature engineering on large-scale operational datasets extracted from XML files and internal databases</li>
        <li>Developed a baseline machine learning model to analyze and predict travel time</li>
        <li>Prototyped an AI-assisted data analysis workflow using MCP servers and LLMs, enabling users to interact with machine learning pipelines
          through natural language and automatically execute data processing and modeling tasks.</li>
        <li>Supported the Train Autonomy Platform, a sensor-based localization platform, by analyzing sensor data to validate radar ghost-target
            simulations, investigate detection-loss behavior, and prototype IMU slow-drift detection algorithms.</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <div className="experience-title">
            <h2>Undergraduate Research Volunteer</h2>
            <h3>University of Toronto RLEA Lab</h3>
          </div>
          <p className="date">Nov 2025 - Present</p>
        </div>
        <ul>
          <li>Evaluated instance segmentation models (Cellpose, SAM-based models) and analyzed segmentation quality to separate single-cell phytoliths from multi-cell microscopy images.</li>
          <li>Explored active learning pipelines to reduce labeling effort and improve segmentation performance on limited biological datasets.</li>
          <li>Investigated CNN- and Vision Transformer-based models for single-cell classification tasks.</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <div className="experience-title">
            <h2>Software Developer Intern</h2>
            <h3>The Hospital for Sick Children</h3>
          </div>
          <p className="date">Jan 2025 - Apr 2024</p>
        </div>
        <ul>
          <li>Worked in a team to build a website using Next.js and FastAPI for their researchers to analysis data features, track and monitor participant data</li>
          <li>Developed an algorithm to process daily sensor data from participants and automatically determine hours of wear</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <div className="experience-title">
            <h2>ML Developer</h2>
            <h3>The Linux Foundation</h3>
          </div>
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
          <div className="experience-title">
            <h2>Teaching Assistant</h2>
            <h3>University of Toronto</h3>
          </div>
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
          <div className="experience-title">
            <h2>ML Developer</h2>
            <h3>U of T Machine Intelligence Student Team</h3>
          </div>
          <p className="date">Sep 2023 - Aug 2024</p>
        </div>
        <ul>
          <li>Implemented One-vs-Rest and Binary Relevance SVM and ensembled them with Naive Bayes to solve a Hierarchical Multi-Label Classification problem</li>
          <li>Collected and preprocessed raw data to feed into the models by performing tasks such as cleaning, normalizing, and feature engineering</li>
          <li>Collaborated using GIT & Notion, learning effective design & communication skills for large-scale ML development projects</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;