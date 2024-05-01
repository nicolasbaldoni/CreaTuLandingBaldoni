import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function ItemDetail({ itemDetalle }) {
    return (
        <Card style={{border: 'none'}}>
            <Row>
                <Col className='col-md-4'>
                    <Card.Img variant="top" src={itemDetalle?.image} style={{ width: '200px', height: '100%', objectFit: 'cover' }} />
                </Col>
                <Col className='col-md-8'>
                    <Card.Body>
                        <Card.Title className='text-start'>{itemDetalle?.title}</Card.Title>
                        <Card.Text className='text-start'>
                            {itemDetalle?.description}
                        </Card.Text>
                        <Card.Text className='text-start' style={{fontSize: '2rem', fontWeight: 'bold'}}>${itemDetalle?.price}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ItemDetail;