import Kiwi from "./kiwi.jpg";

const addImage = () => {
  const img = document.createElement("img");
  img.alt = "kiwi";
  img.width = 300;
  img.src = Kiwi;
  console.log(Kiwi);
  document.querySelector("body").appendChild(img);
};
export default addImage;
