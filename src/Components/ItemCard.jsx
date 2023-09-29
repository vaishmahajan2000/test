import React from 'react'
import { CardBody,Row,Col,Card, CardText, Container, Button} from 'reactstrap'

function itemCard() {
  return (
    <div>
        <Row>
        <Col>
        <Card className='m-3'>
            <img style={{height:'150px', width:'100%',margin:'2px 0px',objectFit:'contain'}}   alt='loading...'></img>
            <CardBody>
                <h2>Isha </h2>
                
                <CardText><b>About</b>
                <p>I am a FullStack developer</p>
               
                </CardText>               
                    <Container style={{display:'flex',textAlgin:'center'}}>                 
                    <Button color='info' size='sm' className='m-2'>Info</Button>              
                    <Button color='info' size='sm' className='m-2'>Address</Button>
                    </Container>
            </CardBody>
        </Card>
        </Col>
      </Row>
    </div>
  )
}

export default itemCard




