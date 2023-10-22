import React, { useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:2000/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("an error occurred , check console for solution");
        console.log(error);
      });
  };
  return (
    <Box mt={6}>
      <BackButton />
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            color: "#000",
          }}
        >
          Create Book
        </Typography>

        {loading ? (
          <Spinner />
        ) : (
          <Box
            mt={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
              backgroundColor: "grey",
              flexDirection: "column",
              gap: 4,
              backgroundImage:
                "linear-gradient(to right bottom, #a7c8f9, #81cbe6, #7cc8c6, #90c0a5, #a9b58e)",
              borderRadius: "10px",
            }}
          >
            <TextField
              variant="outlined"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <TextField
              variant="outlined"
              label="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />

            <TextField
              variant="outlined"
              label="Publish Year"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              required
            />

            <Button
              onClick={handleSaveBook}
              variant="container"
              sx={{
                color: "#fff",
                backgroundColor: "blue",
                "&:hover": {
                  backgroundColor: "blue",
                },
              }}
            >
              Save
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CreateBook;
