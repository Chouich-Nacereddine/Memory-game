import { createItemUI } from "./UI.js";

const CardsArray = [
  {
    isUp: false,
    path: "./assets/cow.png",
  },
  {
    isUp: false,
    path: "./assets/bee.png",
  },
  {
    isUp: false,
    path: "./assets/clownfish.png",
  },
  {
    isUp: false,
    path: "./assets/dog.png",
  },
  {
    isUp: false,
    path: "./assets/elephant.png",
  },
  {
    isUp: false,
    path: "./assets/horse.png",
  },
  {
    isUp: false,
    path: "./assets/lion.png",
  },
  {
    isUp: false,
    path: "./assets/panda.png",
  },
  {
    isUp: false,
    path: "./assets/penguin.png",
  },
  {
    isUp: false,
    path: "./assets/sea-turtle.png",
  },
  {
    isUp: false,
    path: "./assets/snail.png",
  },
  {
    isUp: false,
    path: "./assets/whale.png",
  },
  {
    isUp: false,
    path: "./assets/cow.png",
  },
  {
    isUp: false,
    path: "./assets/bee.png",
  },
  {
    isUp: false,
    path: "./assets/clownfish.png",
  },
  {
    isUp: false,
    path: "./assets/dog.png",
  },
  {
    isUp: false,
    path: "./assets/elephant.png",
  },
  {
    isUp: false,
    path: "./assets/horse.png",
  },
  {
    isUp: false,
    path: "./assets/lion.png",
  },
  {
    isUp: false,
    path: "./assets/panda.png",
  },
  {
    isUp: false,
    path: "./assets/penguin.png",
  },
  {
    isUp: false,
    path: "./assets/sea-turtle.png",
  },
  {
    isUp: false,
    path: "./assets/snail.png",
  },
  {
    isUp: false,
    path: "./assets/whale.png",
  },
];
const shuffledArray = CardsArray.sort((a, b) => 0.5 - Math.random());

export const render = () => {
  shuffledArray.forEach((RandomCard, index) => {
    createItemUI(RandomCard, index);
  });
};
