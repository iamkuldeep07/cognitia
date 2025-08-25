import useCanvasCursor from "../hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas id="canvas" className="fixed inset-0 pointer-events-none z-50" />;
};

export default CanvasCursor;