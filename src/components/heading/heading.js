import "./heading.scss";

class Heading {
  render(pageName) {
    const heading = document.createElement("h1");
    heading.innerHTML = `This is page  ${pageName}` ;
    heading.classList.add("heading");
    const body = document.querySelector("body");
    body.appendChild(heading);
  }
}

export default Heading;
