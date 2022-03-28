import Brain from "./brain.jpg";
import "./brain.scss";

class BrainImage {
  render() {
    const img = document.createElement("img");
    img.alt = "Brain";
    img.src = Brain;
    img.classList.add("brain");
    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default BrainImage;
