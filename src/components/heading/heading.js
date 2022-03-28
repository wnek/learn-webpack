import "./heading.scss";

class Heading {
  render() {
    const heading = document.createElement("h1");
    heading.innerHTML = "Heading";
    heading.classList.add("heading");
    const body = document.querySelector("body");
    body.appendChild(heading);
  }
}

export default Heading;
