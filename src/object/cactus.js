class CactusObj {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  }
  draw() {
    let cactusImage = new Image();
    cactusImage.src = "../public/asset/catus.png";

    this.ctx.drawImage(cactusImage, this.x, this.y, this.width, this.height);
  }
  move() {}
}

export default CactusObj;
