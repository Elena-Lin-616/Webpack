import Kiwi from "./kiwi.jpg";
import altText from "./altText.txt";
const addImage = () => {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 300;
  img.src = Kiwi;
  console.log(Kiwi);
  document.querySelector("body").appendChild(img);
};
export default addImage;
