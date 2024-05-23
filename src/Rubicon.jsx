
import { Container, Nav, Col, Row, Navbar } from 'react-bootstrap';

export const Rubicon = () => {
  return (
    <section>
      <RubiconNav />
      <Recycla />
    </section>
  )
}
export const RubiconNav = () => {
  return (
    <section>
      <Navbar expand="lg" className="bg-body-tertiary pt-2"  >
        <Container fluid>
          <img src="https://dev.rubicontutors.com/html/assets/images/logo.png" style={{ maxWidth: '180px' }} alt="rubicon" className='img-fluid' />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
            <div className="d-flex">
              <button className='btn btn-sm btnclass'>Group Classes</button>
              <button className='btn btn-sm btnclass'>Find a Teacher</button>
              <button className='btn btn-sm btnclass'>Apply to Teach</button>
              <div className='Question' >
                <img src="https://dev.rubicontutors.com/html/assets/images/help-circle.png" alt="Questions" />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  )
}
export const Recycla = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
            <section style={{ background: '#616874', height: '100vh' }} >
              <h6>sdjkhfjdgfj</h6>
            </section>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <section>
              <p>jsdhfjkhjsdf</p>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
