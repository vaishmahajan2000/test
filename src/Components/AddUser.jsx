import React, { useState } from 'react'
import { Container, Row, Col, Card,Form,Label,Input, CardBody, Button} from 'reactstrap'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';



function AddUser() {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[gender,setGender]=useState("");
    const[mobile,setMobile]=useState("");
    const[about,setAbout]=useState("");

    const onFormSubmit=(event)=>{ 
        event.preventDefault();   
        if(name === "")
        toast.error("Enter Name");
       else if(email === "")
       toast.error("Enter Email");
       else if(password === "")
       toast.error("Enter Password");
       else if(mobile === "")
       toast.error("Enter Mobile");
       else if(gender === "")
       toast.error("Enter Gender");
       else if(about === "")
       toast.error("Enter About");

        else{

        localStorage.setItem('name',name);    
        localStorage.setItem('email',email);    
        localStorage.setItem('password',password);    
        localStorage.setItem('mobile',mobile);    
        localStorage.setItem('gender',gender);  
        localStorage.setItem('about',about);    
         toast.success("profile created");
        }
     }
    

  return (
    <div>
     <Container>
    <Row className='mt-3'>
    <Col md={{size:4,offset:4}}>
    <Card className='mt-5' color='light'>
      <h3 className='text-center mt-2'>Create Profile</h3>
      <CardBody>
      
        <div className='m-3'>
          <div className='m-3'>
         <Label id='name' for="name">Name</Label>
         <Input 
         onChange={(event)=>setName(event.target.value)} 
          type='text'  
          id='name' 
          placeholder="Enter Name">
          </Input>
         </div>

         <div className='m-3'>
         <Label id='email' for="email">Email</Label>
         <Input 
         onChange={(event)=>setEmail(event.target.value)} 
          type='email'  
          id='email' 
          placeholder="Enter Email">
          </Input>
         </div>

         <div className='m-3'>
         <Label id='password' for="password">Password</Label>
         <Input 
         onChange={(event)=>setPassword(event.target.value)} 
          type='password'  
          id='password' 
          placeholder="Enter Password">
          </Input>
         </div>

         <div className='m-3'>
         <Label id='gender' for="gender">Gender</Label>
         <Input 
         onChange={(event)=>setGender(event.target.value)} 
          type='text'  
          id='gender' 
          placeholder="Female/Male">
          </Input>
         </div>

         <div className='m-3'>
         <Label id='mobile' for="mobile">Mobile</Label>
         <Input
        onChange={(event)=>setMobile(event.target.value)} 
          type='text'  
          id='mobile' 
          placeholder="Enter Mobile Number">
          </Input>
         </div>

         <div className='m-3'>
         <Label id='about' for="about">About</Label>
         <Input 
        onChange={(event)=>setAbout(event.target.value)} 
          type='text'  
          id='about' 
          placeholder="Enter About Yourself">
          </Input>
         </div>

         <div className='m-3 text-center'>
          <Button size='sm' color='success' onClick={onFormSubmit}>Create</Button>
        
         </div>

        
        </div>
         
         </CardBody>
         </Card>
         </Col>
         </Row>
         </Container>
</div>
  )
}


export default AddUser
