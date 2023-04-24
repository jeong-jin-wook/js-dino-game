class dinoObj {
  constructor(x, y, width = 50, height = 50) {
    this.x = x;
    this.y = y;
    this.act = "STOP";
    this.jumpTimer = 100;
    this.height = height;
    this.width = width;
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  }

  draw() {
    let dinoImage = new Image();
    dinoImage.src = "../public/asset/dinosaurs.png";

    this.ctx.drawImage(dinoImage, this.x, this.y, this.width, this.height);

    if (this.act === "JUMPING") {
      if (this.jumpTimer < 0) {
        this.act = "LANDING";
        this.jumpTimer = 90;
      }
      if (this.y > 150) {
        this.y = this.y - 5;
      }
      this.jumpTimer--;
    }

    if (this.act === "LANDING") {
      if (this.jumpTimer < 0) this.act = "STOP";
      this.y = this.y + 4;
      this.jumpTimer = this.jumpTimer - 2;
    }
  }

  jump() {
    if (this.act === "STOP") {
      this.act = "JUMPING";
      this.jumpTimer = 50;
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  collision(cactus) {
    let xDiff = cactus.x - (this.x + this.width);
    let yDiff = cactus.y - (this.y + this.height);
    if (xDiff < 0 && yDiff < 0) {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      return true;
    }
    return false;
  }
}
export default dinoObj;
