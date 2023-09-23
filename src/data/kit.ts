import { v4 as uuidv4 } from "uuid";

import image1 from "@/assets/1-POTE-BLACK.png";
import image3 from "@/assets/3-POTES-BLACK.png";
import image4 from "@/assets/4-POTES-BLACK.png";
import image6 from "@/assets/6-POTES-BLACK.png";

export const KITS = [
  {
    id: uuidv4(),
    image: image6,
    url: "http://mon.net.br/22xlga",
  },
  {
    id: uuidv4(),
    image: image4,
    url: "http://mon.net.br/22xlg8",
  },
  {
    id: uuidv4(),
    image: image3,
    url: "http://mon.net.br/22xlg4",
  },
  // {
  //   id: uuidv4(),
  //   image: image2,
  //   url: "http://mon.net.br/2srdt4",
  // },
  {
    id: uuidv4(),
    image: image1,
    url: "http://mon.net.br/22xlfq",
  },
];
