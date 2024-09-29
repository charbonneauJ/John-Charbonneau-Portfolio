import Card from 'react-bootstrap/Card';
import Photo from '../images/LinkedinPhoto.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (

    <Row>
    <Col>
    <img src={Photo} width={164} height={164}/>
    </Col>
    <Col>
    <Card style={{ width: '52rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>

  );
}

export default About;