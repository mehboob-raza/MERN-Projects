import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  console.log(book, "id");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:2000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Box mt={4}>
      <BackButton />
      <Container maxWidth="md">
        <Typography variant="h3"> Show Book </Typography>
        {loading ? (
          <Spinner />
        ) : (
          <Box
            mt={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              backgroundImage:
                "linear-gradient(to right bottom, #247f33, #316f28, #365f1f, #365019, #334115)",
              justifyContent: "center",
              // alignItems: "center",
              p: 4,
              borderRadius: "10px",
            }}
          >
            <Typography> ID : {book._id} </Typography>
            <Typography> Title : {book.title} </Typography>
            <Typography> Author : {book.author} </Typography>
            <Typography> PublishYear : {book.publishYear} </Typography>
            <Box>
              <Typography>
                {" "}
                Create Time : {new Date(book.createdAt).toString()}
              </Typography>
            </Box>
            <Box>
              <Typography>
                {" "}
                Last Update Time : {new Date(book.updatedAt).toString()}
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ShowBooks;
