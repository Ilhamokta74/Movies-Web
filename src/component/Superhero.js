import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../asset/images/superhero/antman.jpg"
import avangerImage from "../asset/images/superhero/avenger.jpg"
import batmanImage from "../asset/images/superhero/batman.jpg"


const Superhero = () => {
  return (
    <Container>
      <br></br>
      <br></br>
      <h1 className="text-white">SUPERHERO MOVIE</h1>
      <Row>
        <Col md={4} className="moviWrapper" id="superhero">
          <Card className="movieImage">
            <Image src={antmanImage} alt="Card image" className="images" />
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
            <Image src={avangerImage} alt="Card image" className="images" />
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
            <Image src={batmanImage} alt="Card image" className="images" />
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

export default Superhero