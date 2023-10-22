import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillFileAdd } from "react-icons/ai";
import Spinner from "../components/Spinner";
import BookTables from "../components/home/BookTables";
import BookCards from "../components/home/BookCards";

const Home = () => {
  const [books, setBooks] = useState([]);
  // console.log(books);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:2000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Box py={4}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Button variant="contained" onClick={() => setShow("table")}>
            Table
          </Button>
          <Button variant="contained" onClick={() => setShow("card")}>
            Cards
          </Button>
        </Box>
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Books List
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 3,
              fontWeight: "bold",
            }}
          >
            Create New Data:
            <Link to="books/create">
              <AiFillFileAdd
                style={{
                  color: "navy",
                  fontSize: "30px",
                  alignSelf: "flex-end",
                }}
              />
            </Link>
          </Box>
        </Box>
        {loading ? (
          <Spinner />
        ) : show === "table" ? (
          <BookTables books={books} />
        ) : (
          <BookCards books={books} />
        )}
      </Container>
    </Box>
  );
};

export default Home;
