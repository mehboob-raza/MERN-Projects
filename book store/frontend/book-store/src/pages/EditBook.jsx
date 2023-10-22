import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:2000/books/${id}")
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("An error occurred, check console");
        console.log(err.message);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:2000/books/${id}`, data)
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
          Edit Book
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
              onClick={handleEditBook}
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

export default EditBook;
