import HelloWorldButton from "./../components/hello-world-button/hello-world-button.js";
import Heading from "./../components/heading/heading.js";
import addImage from "./add-image.js";

// todo : handle css import with loader

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

// todo : extract css into separate file
const heading = new Heading();
heading.render();
// helloWorld();
// console.log("1st complete of webpack");
// * each time when I rebuild js app by webpace, auto refresh webpage

// todo : learn how to use asset module to import different files
// addImage();
