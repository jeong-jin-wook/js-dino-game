"use strict";

import CanvasBackground from "./object/background.js";
import CactusObj from "./object/cactus.js";
import dinoObj from "./object/dinosaurs.js";

const canvas = new CanvasBackground(
  document.getElementById("canvas"),
  700,
  500
);

const ctx = canvas.canvas.getContext("2d");

let timer = 0;
let randomTiming = Math.floor(Math.random() * 10);
let cactusArray = [];

const dinosaurs = new dinoObj(120, 330, 50, 60);

const animation = () => {
  ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
  timer++;
  if (timer % (144 + 10 + randomTiming * 90) === 0) {
    let cactus = new CactusObj(690, 325, 50, 80);
    cactusArray.push(cactus);
    randomTiming = Math.floor(Math.random() * 10);
  }
  cactusArray.forEach((cactus, i, o) => {
    cactus.x = cactus.x - 4;
    cactus.draw();

    if (cactus.x < -10) {
      o.splice(i, 1);
    }
    if (dinosaurs.collision(cactus)) {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animation);
    }
  });

  dinosaurs.draw();

  requestAnimationFrame(animation);
};
animation();

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") dinosaurs.jump();
});
