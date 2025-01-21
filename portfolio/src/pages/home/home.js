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

        let typeSpeed = 100;
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
      "Hi! I'm Takia, a third-year computer science student at the University of Toronto. I am currently working as a teaching assistant at UofT. I am interested in Machine Learning and Deep Learning, especially in NLP tasks. I have worked on a couple of ML projects and am continuously improving my skills. Currently, I am working under a professor to develop an AI tutor. "
    ];

    new TypeWriter(aboutSpan, words, 2500, pencil);
  }, []);

  return (
    <div className="home-container">
      <div className="about-section">
        <h1 className="font-effect-outline">About</h1>
        <p>
          <span className="txt-type" id="about-span"></span>
          <i className="fas fa-pencil-alt"></i>
        </p>
      </div>
    </div>
  );
}

export default Home;
