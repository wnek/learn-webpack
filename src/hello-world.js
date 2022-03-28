import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";
import BrainImage from "./components/brain-image/brain-image.js";

const heading = new Heading();
heading.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const brain = new BrainImage();
brain.render();
