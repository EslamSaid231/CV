import ProgressBar from "react-bootstrap/ProgressBar";

function ContextualExample({ progress }) {
  return (
    <div style={{ width: "330px", margin: "auto" }}>
      <ProgressBar variant="warning" now={progress} />
    </div>
  );
}

export default ContextualExample;
