import React from 'react'
import {Row,Col, Container, Card, CardBody } from 'reactstrap'
import{NavLink} from 'reactstrap';



function Admindash() {
  return (
   
   <div className='home'>
    <Container >
        <Row className='text-center mt-5'>
        <Col>
          <h2>Welcome Admin!👋</h2>
        </Col>
      </Row>
      
    <Row>
      <Col md={{size:4,offset:4}}>
      <Card className='shadow-lg mt-5 text-center' color='light'>
        <CardBody>
      <NavLink href='/adduser'><h5>Add Profiles</h5></NavLink> 
      <NavLink href='/edituser'><h5>Edit Profiles</h5></NavLink> 
      <NavLink href='/viewall'><h5>View All Profiles</h5></NavLink> 
      </CardBody>
    </Card>

      </Col>
    </Row>
    
    </Container>
   
   </div>


  )
}

export default Admindash;
