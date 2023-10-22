import { Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="spinner-container">
        <Box className="loading-spinner"></Box>
      </Box>
    </Box>
  );
};

export default Spinner;
