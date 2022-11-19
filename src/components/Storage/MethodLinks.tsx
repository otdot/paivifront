import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MethodLinks = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button onClick={() => navigate("/order")}>Order products</Button>
      <div style={{ display: "flex" }}>
        <Button onClick={() => navigate("/paivi")}>
          Check products going Out of Date
        </Button>
      </div>
    </div>
  );
};

export default MethodLinks;
