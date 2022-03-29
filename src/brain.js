import Heading from "./components/heading/heading";
import BrainImage from "./components/brain-image/brain-image";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("Brain"));

const brain = new BrainImage();
brain.render();
