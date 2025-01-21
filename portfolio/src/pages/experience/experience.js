import React from 'react'; 
import './experience.css'; // Link to the CSS file

function Experience() {
  return (
    <div className="experience-container">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="experience-item">
        <div className="experience-header">
          <h3>ML Developer, The Linux Foundation</h3>
          <p className="date">Jan 2024 - Present</p>
        </div>
        <ul>
          <li> Developing a Personal AI Tutor that guides a student and surface the next best possible course of action/module/material that the student should know to learn ML/AI concepts</li>
          <li>Currently working on developing on a Graph RAG model that will collaborate with a DAG structured database to provide content to the chatbot.</li>
          <li>Devising a chatbot by finetuning a pre-existing LLM and creating the surface for the chatbot using React/Next.js</li>
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