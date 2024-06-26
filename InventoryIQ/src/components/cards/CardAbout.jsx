
import { Container, Col, Card, Row, Carousel } from 'react-bootstrap';
import './cardAbout.css';

const CardAbout = () => {
  return (
    <Container fluid>
      <Carousel interval={null} nextLabel="" prevLabel="" className="carousel">
        {/* Primera diapositiva */}
        <Carousel.Item>
          <Row className="justify-content-center">
            {/*CARD 1*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Agustin.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Agustin Brito</Card.Title>
                  <Card.Text>
                    Controlador de Stock
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/*CARD 2*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Francis.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Francisco Barrionuevo</Card.Title>
                  <Card.Text>
                    Encargado de Distribución
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/*CARD 3*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Emanuel.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Emanuel Brandán</Card.Title>
                  <Card.Text>
                    Atención al cliente
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Segunda diapositiva */}
        <Carousel.Item>
          <Row className="justify-content-center">
            {/*CARD 4*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Rosario.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Rosario Gasco</Card.Title>
                  <Card.Text>
                    Encargada de personal
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/*CARD 5*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Equipo.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>InventoryIQ</Card.Title>
                  <Card.Text>
                    Al servicio de nuestros clientes
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CardAbout;