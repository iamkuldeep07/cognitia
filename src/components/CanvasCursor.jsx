import useCanvasCursor from "../hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();
  return (
    <canvas
      id="canvas"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",   // inline style — guaranteed to apply
        zIndex: 9999,
        display: "block",
      }}
    />
  );
};

export default CanvasCursor;