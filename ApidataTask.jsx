import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function ApidataTask() {
    const [apidata, setapidata] = useState([])
    useEffect(() => {
      axios.get('https://dummyjson.com/products').then((display)=>
      setapidata(display.data.products))
      
    }, [])
    console.log(apidata)
    

  return (


    <div >
        <div className='row'>
        {apidata.map((dis)=>
            <Card style={{ width: '18rem', margin:'10px', padding:'10px'}}>
                     <Carousel>
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={dis.images[2]}
                         alt={dis.images[3]}
                         style={{height:'150px'}}
                       />
                     </Carousel.Item>
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={dis.images[3]}
                         alt={dis.images[2]}
                         style={{height:'150px'}}
                       />
                     </Carousel.Item>
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={dis.images[1]}
                         alt={dis.images[2]}
                         style={{height:'150px'}}
                       />
                     </Carousel.Item>
                   </Carousel>
                            
                                
                       
               
                        <Card.Body>
                            <Card.Title>{dis.title}</Card.Title>
                            <Card.Text>
                            {dis.description}
                            </Card.Text>
                            <Button variant="primary">{dis.price}$</Button>
                        </Card.Body>
                   
            </Card>
             )}
        </div>
    </div>
  )
}

export default ApidataTask