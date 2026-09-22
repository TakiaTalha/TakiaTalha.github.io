import { useEffect } from "react";
import "./home.css"; // Import the CSS file

function Home() {
  useEffect(() => {
    class TypeWriter {
      constructor(txtElement, words, wait = 3000, pencilElement) {
        this.txtElement = txtElement; // Text container
        this.words = words; // Words to type
        this.txt = ""; // Current text being typed
        this.wordIndex = 0; // Current word index
        this.wait = parseInt(wait, 10); // Typing pause
        this.isDeleting = false; // Flag for deletion
        this.pencilElement = pencilElement; // Pencil icon element
        this.type();
      }

      type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 10;
        if (this.isDeleting) typeSpeed /= 4;

        if (this.pencilElement) {
          if (this.isDeleting) {
            this.pencilElement.className = "fas fa-pencil-alt erasing-animation";
          } else {
            this.pencilElement.className = "fas fa-pencil-alt writing-animation";
          }
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          typeSpeed = this.wait;
          this.isDeleting = true;
          if (this.pencilElement) this.pencilElement.className = "fas fa-pencil-alt";
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.wordIndex++;
          typeSpeed = 1;
        }

        setTimeout(() => this.type(), typeSpeed);
      }
    }

    // Initialize the TypeWriter for the paragraph
    const aboutSpan = document.querySelector("#about-span");
    const pencil = aboutSpan.nextElementSibling; // Select the pencil icon
    const words = [
      "Hi! I'm Takia, a Computer Science and Mathematics student at the University of Toronto with a strong interest in machine learning, algorithms, and data-driven systems. My experience spans machine learning, optimization, sensor algorithms, computer vision, and large-scale data analysis. During my co-op at Hitachi Rail, I worked with large operational datasets, developed machine learning and optimization models, and explored AI-assisted data analysis using LLMs. I also worked with radar and IMU sensor data for autonomous systems, investigating detection behavior and prototyping sensor algorithms. Alongside industry experience, I’m involved in research exploring deep learning for computer vision, including image segmentation and classification. I enjoy working on challenging problems where data and algorithms come together, and I’m always looking for opportunities to learn, build, and apply these ideas to real-world problems."
    

    ];

    new TypeWriter(aboutSpan, words, 2500, pencil);
  }, []);

  return (
    <div className="home-container">
      <div className="about-section">
        <h1 className="font-effect-outline">About</h1>
        <p>
          <span className="txt-type" id="about-span"></span>
          <i className="fas fa-pencil-alt" aria-hidden="true"></i>
        </p>
      </div>
    </div>
  );
}

export default Home;
