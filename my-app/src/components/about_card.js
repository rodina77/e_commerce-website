import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample() {
  return (
    <>
    <div className="container justify-content-center"> 
    <div className='row'>
    <div className='col-12 col-md-4'>
    <Card className='shadow-lg' id='normal_card' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Who Are We</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup  className="list-group-flush">
        <ListGroup.Item id='colored_p'>Cras justo odio</ListGroup.Item>
        <ListGroup.Item id='colored_p'>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item id='colored_p'>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" >Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-4'>
    <Card id='about_card' className='shadow-lg' style={{ width: '18rem' }}>
      <Card.Body id='about_card'>
        <Card.Title>Who Are We</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup id='about_card'>
        <ListGroup.Item id='about_card'>Cras justo odio</ListGroup.Item>
        <ListGroup.Item id='about_card'>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item id='about_card'>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className='text-white'>Card Link</Card.Link>
        <Card.Link href="#" className='text-white'>Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-4'>
    <Card className='shadow-lg' id='normal_card' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Who Are We</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item id='colored_p'>Cras justo odio</ListGroup.Item>
        <ListGroup.Item id='colored_p'>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item id='colored_p'>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    <hr className='mb-5 mt-5'></hr>
    </>
  );
}

export default KitchenSinkExample;