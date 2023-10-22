import { Box } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <Box>
      <Link to={destination}>
        <BiArrowBack
          style={{
            fontSize: "30px",
            color: "black",
            fontWeight: "bold",
          }}
        />
      </Link>
    </Box>
  );
};

export default BackButton;
