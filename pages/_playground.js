import Slider from "../components/MyCustomeSlider";

// images

import img1 from "../public/images/playground/1.jpg";
import img2 from "../public/images/playground/2.jpg";
import img3 from "../public/images/playground/3.jpg";
import img4 from "../public/images/playground/4.jpg";
import img5 from "../public/images/playground/5.jpg";
import img6 from "../public/images/playground/6.jpg";
import img7 from "../public/images/playground/7.jpg";
import img8 from "../public/images/playground/8.jpg";

const ImageList = [
  { src: img1, key: 1, alt: "Slider Images" },
  { src: img2, key: 2, alt: "Slider Images" },
  { src: img3, key: 3, alt: "Slider Images" },
  { src: img4, key: 4, alt: "Slider Images" },
  { src: img5, key: 5, alt: "Slider Images" },
  { src: img6, key: 6, alt: "Slider Images" },
  { src: img7, key: 7, alt: "Slider Images" },
  { src: img8, key: 8, alt: "Slider Images" },
];

export default function MainSlider() {
  return <Slider list={ImageList} />;
}
