class TypeWriter {
    constructor(txtElement, words, wait = 3000, pencilElement) {
      this.txtElement = txtElement; // The HTML element where text is typed
      this.words = words; // Array of words/phrases
      this.txt = ''; // Current typed text
      this.wordIndex = 0; // Index of the current word in `words`
      this.wait = parseInt(wait, 10); // Time delay
      this.isDeleting = false; // Tracks if we are in the "deleting" phase
      this.pencilElement = pencilElement; // The pencil icon element
      this.type();
    }
  
    type() {
      const current = this.wordIndex % this.words.length; // Current word index
      const fullTxt = this.words[current]; // The full text of the current word
  
      // Adjust `this.txt` depending on whether we're deleting or typing
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1); // Remove a character
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1); // Add a character
      }
  
      // Update the element's innerHTML
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Set typing speed
      let typeSpeed = 300;
      if (this.isDeleting) typeSpeed /= 4; // Deleting is faster
  
      // Animate the pencil icon
      if (this.pencilElement) {
        if (this.isDeleting) {
          this.pencilElement.className = 'fas fa-pencil-alt erasing-animation';
        } else {
          this.pencilElement.className = 'fas fa-pencil-alt writing-animation';
        }
      }
  
      // Check if the current word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Pause at the end of the word
        typeSpeed = this.wait;
        this.isDeleting = true;
        // Reset pencil animation
        if (this.pencilElement) this.pencilElement.className = 'fas fa-pencil-alt';
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++; // Move to the next word
        typeSpeed = 1000; // Pause before typing the next word
      }
  
      // Continue typing after a delay
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  export default TypeWriter;
  