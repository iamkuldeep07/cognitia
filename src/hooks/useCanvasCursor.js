import { useEffect } from "react";

const useCanvasCursor = () => {
  let ctx, f, pos = {}, lines = [], E;

  function Oscillator(e) { this.init(e || {}); }
  Oscillator.prototype = {
    init(e) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
    },
    update() {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    }
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }

  function Line(e) { this.init(e || {}); }
  Line.prototype = {
    init(e) {
      this.spring = e.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = Array.from({ length: E.size }, () => {
        const node = new Node();
        node.x = pos.x;
        node.y = pos.y;
        return node;
      });
    },
    update() {
      let spring = this.spring;
      let t = this.nodes[0];
      t.vx += (pos.x - t.x) * spring;
      t.vy += (pos.y - t.y) * spring;

      for (let i = 0; i < this.nodes.length; i++) {
        t = this.nodes[i];
        if (i > 0) {
          const prev = this.nodes[i - 1];
          t.vx += (prev.x - t.x) * spring;
          t.vy += (prev.y - t.y) * spring;
          t.vx += prev.vx * E.dampening;
          t.vy += prev.vy * E.dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        spring *= E.tension;
      }
    },
    draw() {
      ctx.beginPath();
      ctx.moveTo(this.nodes[0].x, this.nodes[0].y);
      for (let i = 1; i < this.nodes.length - 2; i++) {
        const curr = this.nodes[i];
        const next = this.nodes[i + 1];
        const x = 0.5 * (curr.x + next.x);
        const y = 0.5 * (curr.y + next.y);
        ctx.quadraticCurveTo(curr.x, curr.y, x, y);
      }
      const last = this.nodes[this.nodes.length - 1];
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
    }
  };

  function onMousemove(e) {
    function createLines() {
      lines = Array.from({ length: E.trails }, (_, i) =>
        new Line({ spring: 0.4 + (i / E.trails) * 0.025 })
      );
    }

    function updatePos(event) {
      if (event.touches) {
        pos.x = event.touches[0].pageX;
        pos.y = event.touches[0].pageY;
      } else {
        pos.x = event.clientX;
        pos.y = event.clientY;
      }
      event.preventDefault();
    }

    document.removeEventListener("mousemove", onMousemove);
    document.removeEventListener("touchstart", onMousemove);
    document.addEventListener("mousemove", updatePos);
    document.addEventListener("touchmove", updatePos);
    document.addEventListener("touchstart", updatePos);

    updatePos(e);
    createLines();
    render();
  }

  function render() {
    if (ctx.running) {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `hsla(${Math.round(f.update())}, 50%, 50%, 0.2)`;
      ctx.lineWidth = 1;

      for (const line of lines) {
        line.update();
        line.draw();
      }

      ctx.frame++;
      requestAnimationFrame(render);
    }
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  const initCanvas = () => {
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.running = true;
    ctx.frame = 1;
    E = { friction: 0.5, trails: 20, size: 50, dampening: 0.25, tension: 0.98 };
    f = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  };

  useEffect(() => {
    initCanvas();
    return () => {
      ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;