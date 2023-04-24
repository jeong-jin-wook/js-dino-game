class CanvasBackground {
  constructor(canvas, width = 1000, height = 600, background = "red") {
    this.canvas = canvas;
    canvas.width = width;
    canvas.height = height;
    canvas.background = background;
  }
}
export default CanvasBackground;
