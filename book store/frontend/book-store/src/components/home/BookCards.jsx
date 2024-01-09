import { GrInfo, GrFormEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Container } from "@mui/material";
import { useState } from "react";

const BookCards = ({ books }) => {
  return (
    <Container maxWidth='lg'>
      <Grid container gap={1}>
      {books.map((book) => {
        return (
          <Grid item key={book.id} lg={4} md={10} sm={8} xs={12}>
            <Box
            
            sx={{
              width: "100%",
              p: 3,
              border: "2px solid gray",
              gap: 3,
                borderRadius: 2,
              height: "100%",
            }}
          >
            <Box display="flex" gap={3} flexWrap="wrap">
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="h6">Title:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {" "}
                  {book.title}{" "}
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="h6">Author:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {" "}
                  {book.author}{" "}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="h6">Publish Year : </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {" "}
                  {book.publishYear}{" "}
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              //   gap={1}
              mt={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Link to={`/books/details/${book._id}`}>
                <GrInfo
                  style={{
                    fontSize: "16px",
                    color: "#d345",
                  }}
                />
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <GrFormEdit
                  style={{
                    fontSize: "20px",
                    color: "#d56",
                  }}
                />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <AiFillDelete
                  style={{
                    fontSize: "16px",
                    color: "red",
                  }}
                />
              </Link>
            </Box>
          </Box>
          </Grid>
        );
      })}
   
      </Grid>
    </Container>
  );
};

export default BookCards;
