import "./hello-world-button.css";
class HelloWorldButton {
  // behavior of this component
  render() {
    const button = document.createElement("button");
    button.textContent = "Hello World ):";
    button.classList.add("btn");
    const body = document.querySelector("body");
    button.onclick = function () {
      const paragraph = document.createElement("p");
      paragraph.textContent = "Hello World !!!!";
      paragraph.classList.add("txt");
      body.appendChild(paragraph);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
