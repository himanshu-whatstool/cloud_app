
import { Container, Nav, Col, Row, Navbar } from 'react-bootstrap';
import { Steps } from 'antd';
import { useState } from 'react';

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

  const services = [
    { "title": "Free quote services", "img": "./cloudform.svg" },
    { "title": "Save money", "img": "./cloudform.svg" },
    { "title": "Reduce climate impact", "img": "./cloudform.svg" }
  ]

  const [metal, setMetal] = useState('')
  const [quantity, setQuantity] = useState('')
  const [weight, setWeight] = useState('')

  const handleAdd = () => {
    const payload = { metal, quantity, weight }
    setMetal(''), setQuantity(''), setWeight('')

    console.log('Add Item', payload);
  }

  return (
    <section style={{ background: '#fffff9', height: '100vh' }}>
      <Container fluid>
        <Container>
          <Row style={{ paddingTop: '80px' }}>
            <h6>Inquiry for: Scrap & Metal</h6>
            <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
              <section style={{ height: '60vh', boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', borderRadius: '8px', background: '#fff', padding: '20px' }} >
                <div style={{ padding: '25px 0' }}>
                  <Steps size="small" current={1} items={[
                    { title: 'Finished' }, { title: 'In Progress' }, { title: 'Waiting' },
                  ]} />
                </div>
                <p style={{ fontWeight: 800 }} className='bold'>Tell us about your junk</p>
                <p className='fw-semibold' >Specify your scrap and/or metal. We want to know what kind of material you have and how large the volumes are. You can choose several combinations!</p>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <div>
                    <select value={metal} onChange={(e) => setMetal(e.target.value)} style={{ borderRadius: '5px' }} name="recycle" className='form-control-sm' >
                      <option value="" selected disabled hidden>Selet Options</option>
                      <option value="aluminium">Aluminium</option>
                      <option value="batteries">Batteries</option>
                      <option value="mixedScrap">Mixed Scrap</option>
                      <option value="lead">Lead</option>
                      <option value="bronze">Bronze</option>
                      <option value="electronic">Electronic Scrap</option>
                      <option value="gold">Gold</option>
                      <option value="carbide">Carbide</option>
                      <option value="scrap">Scrap icon</option>
                      <option value="cable">Cable Scrap(AI)</option>
                      <option value="cableScrap">Cable Scrap(CU)</option>
                      <option value="copper">Copper</option>
                      <option value="chromium">Chromium</option>
                      <option value="brass">Brass</option>
                      <option value="platinum">Platinum</option>
                      <option value="stailless">Stailless</option>
                      <option value="silver">Silver</option>
                      <option value="steel">Steel</option>
                      <option value="tantalum">Tantalum</option>
                      <option value="zinc">Zinc</option>
                    </select>
                  </div>
                  <div>
                    <input value={quantity} onChange={(e) => setQuantity(e.target.value)} className='form-control-sm' type="number" placeholder="Quantity" style={{ borderRadius: '5px' }} name="" />
                  </div>
                  <div>
                    <select value={weight} onChange={(e) => setWeight(e.target.value)} style={{ borderRadius: '5px', width: '8vw' }} className='form-control-sm' name="">
                      <option value="" selected disabled hidden>Select Options</option>
                      <option value="tonee">tone</option>
                      <option value="kgs">Kg</option>
                    </select>
                  </div>
                  <div>
                    <button onClick={() => handleAdd()} className='addbtn'>add +</button>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <div>
                    <h6>{metal}</h6>
                  </div>
                </div>
              </section>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
              <section style={{ boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', borderRadius: '8px', background: '#fff', padding: '20px' }} >
                <h6 className='fw-semibold' >How does Recycla work?</h6>
                <ul>
                  <li>Fill in the form what you need help with. A clear description provides faster and more precise prices/cost proposals.</li>
                  <li>After we receive the request, we will match it with recycling companies in your area and you will receive 1-4 price/cost proposals to compare shortly.</li>
                  <li>Then choose the company you are most happy with and let them do the rest!</li>
                </ul>
                <div>
                  {
                    services.map((v, i) => {
                      return (
                        <section style={{ display: 'flex', columnGap: '8px', alignItems: 'center' }} key={i} >
                          <img src={v.img} alt="recycla" />
                          <p>{v.title}</p>
                        </section>
                      )
                    })
                  }
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container >
    </section >
  )
}

















