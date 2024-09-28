import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PCards({ img, title, link, git, width }) {

  // console.log(props);
  
  return (
    <Card style={{ width }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button href={link} variant="primary">Live Site</Button>
        <Button href={git} variant="info">Git Repository</Button>
      </Card.Body>
    </Card>
  );
}

export default PCards;