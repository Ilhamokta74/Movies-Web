import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../asset/images/trending/dune.jpg"
import everythingImage from "../asset/images/trending/everything.jpg"
import infinityImage from "../asset/images/trending/infinite.jpg"


const Trending = () => {
  return (
    <Container>
      <br></br>
      <br></br>
      <h1 className="text-white">TRENDING MOVIE</h1>
      <Row>
        <Col md={4} className="moviWrapper" id="trending">
          <Card className="movieImage">
            <Image src={duneImage} alt="Card image" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with natural lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="moviWrapper">
          <Card className="movieImage">
            <Image src={everythingImage} alt="Card image" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with natural lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="moviWrapper">
          <Card className="movieImage">
            <Image src={infinityImage} alt="Card image" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with natural lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Trending