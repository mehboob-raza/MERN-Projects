import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:2000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log("An error occured check console");
        console.log(err);
      });
  };
  return (
    <Box>
      <BackButton />

      <Container maxWidth="md">
        <Typography
          mt={2}
          variant="h3"
          sx={{
            fontWeight: "bold",
          }}
        >
          Delete Book
        </Typography>
        {loading ? (
          <Spinner />
        ) : (
          <Box
            sx={{
              backgroundColor: "gray",
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Are you sure, You really want to delete this item
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDeleteBook()}
              >
                Yes, Delete it
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default DeleteBook;
