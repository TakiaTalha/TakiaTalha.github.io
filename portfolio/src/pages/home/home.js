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
      "Hi! I'm Takia, a third-year computer science student at the University of Toronto with a strong passion for Machine Learning and Deep Learning, particularly in Natural Language Processing (NLP) tasks. I am currently working as a teaching assistant at UofT. Over time, I have completed several ML projects and am continuously striving to expand my knowledge and expertise in the field. Currently, I am collaborating with The Linux Foundation to develop a personal AI tutor. Additionally, I am also working with The Hospital for Sick Children to enhance their website with new features to improve usability and data accessibility. I am eager to explore new challenges and opportunities to further my growth in AI and software development"
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
