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
        <Card.Title>John Charbonneau</Card.Title>
        <Card.Text>
         I am a Full Stack Developer with a background in the arts. I have a passion for creating and problem solving. I am a future graduate of the University of Denver's Coding Bootcamp. I am proficient in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js. I am a creative thinker and a team player. I am excited to bring my skills to a new team and help create amazing applications!!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>

  );
}

export default About;