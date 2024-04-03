import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY
      }
    })
      .then((response) => {
        console.log(response.data)
        setMovies(response.data.results); // Corrected property name to results
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <Container>
      <br />
      <br />
      <h1 className="text-white">TRENDING MOVIE</h1>
      <Row>
        {movies.map((movie, index) => { // Changed variable name to movie for clarity
          return (
            <Col md={4} className="moviWrapper" id="trending" key={index}>
              <Card className="movieImage">
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="testing" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">{movie.title}</Card.Title>
                    <Card.Text className="text-left">
                      {movie.overview}
                    </Card.Text>
                    <Card.Text className="text-left">{movie.release_date}</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  );
}

export default Trending;
